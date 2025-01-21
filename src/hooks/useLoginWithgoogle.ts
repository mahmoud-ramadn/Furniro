import { provider, auth } from '../firebase/firebase';
import { signInWithPopup, signOut, User } from 'firebase/auth'; // Import signOut from Firebase
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

const useLoginWithGoogle = () => {
  const [googleAccount, setGoogleAccount] = useState(null); 
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider); 
      const user:User = result.user;

      console.log('Google login successful', user);

      Cookies.set('googleAccount', JSON.stringify(user), { expires: 7 }); // Cookie will expire in 7 days

      setGoogleAccount(user);

      navigate('/'); // Navigate to the homepage or any other page after login
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  // Retrieve the user data from cookies if available
  const getGoogleAccountFromCookies = () => {
    const userData = Cookies.get('googleAccount');
    if (userData) {
      setGoogleAccount(JSON.parse(userData)); // Parse the stored user data
    }
  };

  // Call this function on component mount to check for saved user data
  useEffect(() => {
    getGoogleAccountFromCookies();
  }, []);

  // Logout function
  const handleLogoutFromgoogle = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      console.log('User logged out successfully');

      // Remove user data from cookies
      Cookies.remove('googleAccount');

      // Update the state
      setGoogleAccount(null);
 console.log('fuck me');
 
      // Optionally, navigate the user to the login page or another page
      navigate('/auth'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error during Google sign-out:', error);
    }
  };

  return {
    handleGoogleLogin,
    handleLogoutFromgoogle, // Return the logout function
    googleAccount, // Return the state with the Google account data
  };
};

export default useLoginWithGoogle;
