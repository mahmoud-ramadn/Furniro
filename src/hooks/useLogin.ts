import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthLoginSchema,
  type LoginForm,
} from '../Validations/AuthVailadation';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Cookies from 'js-cookie';

const useLoging = () => {
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

      // Store user name and token in cookies
      Cookies.set('userDisplayName', user.displayName || '', { expires: 7 });
      Cookies.set('userToken', user.accessToken , { expires: 7 });

      // Redirect to home page or another page
      navigate('/');
    } catch (error) {
      const errorCode = error;
      switch (errorCode) {
        case 'auth/user-not-found':
          setErrorMessage('User not found. Please check your email.');
          break;
        case 'auth/wrong-password':
          setErrorMessage('Incorrect password. Please try again.');
          break;
        default:
          setErrorMessage('Something went wrong. Please try again.');
      }
      console.error('Login error:', error);
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
  };
};

export default useLoging;
