import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthLoginSchema,
  type LoginForm,
} from '../Validations/AuthVailadation';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Cookies from 'js-cookie';
import { FirebaseError } from 'firebase/app';

const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
    resolver: zodResolver(AuthLoginSchema),
  });

  const submitForm: SubmitHandler<LoginForm> = async (formData) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      const user = userCredential.user;

      // Store user info in cookies
      Cookies.set('userDisplayName', user.displayName || 'Guest', {
        expires: 7,
      });
      const token = await user.getIdToken();
      Cookies.set('userToken', token, { expires: 7, secure: true });

      // Redirect to home page
      navigate('/');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMessage('User not found. Please check your email.');
            break;
          case 'auth/wrong-password':
            setErrorMessage('Incorrect password. Please try again.');
            break;
          default:
            setErrorMessage('Something went wrong. Please try again.');
        }
      } else {
        setErrorMessage('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      Cookies.set('userDisplayName', user.displayName || 'Guest', {
        expires: 7,
      });
      Cookies.set('userPhotoURL', user.photoURL || '/default-avatar.png', {
        expires: 7,
      });
      const token = await user.getIdToken();
      Cookies.set('userToken', token, { expires: 7, secure: true });
      navigate('/');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/popup-closed-by-user':
            setErrorMessage(
              'The popup was closed before completing the sign-in.',
            );
            break;
          default:
            setErrorMessage('Google login failed. Please try again.');
        }
      } else {
        setErrorMessage('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    errors,
    errorMessage,
    handleSubmit,
    submitForm,
    googleLogin,
  };
};

export default useLogin;
