import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthLoginSchema,
  type LoginForm,
} from '../Validations/AuthVailadation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useLoging = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Track loading state
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(() => localStorage.getItem('token') || '');
  const [data, setData] = useState<unknown>(null); // Explicit any type for clarity

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
    setErrorMessage(''); // Clear any previous errors
    try {
      const response = await axios.post('http://localhost:5002/login', {
        username: formData.email,
        password: formData.password,
      });

      const { token, firstName, lastName } = response.data;

      setData({ firstName, lastName }); 
      setUser(token);
      localStorage.setItem('token', token); 
      navigate('/'); 
    } catch (error) {
      console.error('Login failed', error); 
      setErrorMessage('Invalid credentials, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser('');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return {
    register,
    loading,
    errors,
    errorMessage,
    handleSubmit,
    submitForm,
    user,
    data,
    logout,
  };
};

export default useLoging;
