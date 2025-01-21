// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth ,GoogleAuthProvider} from 'firebase/auth'; // Import getAuth for Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'furnioauth.firebaseapp.com',
  projectId: 'furnioauth',
  storageBucket: 'furnioauth.firebasestorage.app',
  messagingSenderId: '148716777651',
  appId: '1:148716777651:web:efa9bbc0c9721f7eac80c6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

export  const provider = new GoogleAuthProvider();
