// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useLoging from '../../hooks/useLogin';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useLoging();  // Access the logged-in user

    if (!user) {
        return <Navigate to="/auth" />;  // Redirect to login if not logged in
    }

    return <>{children}</>;  // Render protected children if logged in
};

export default ProtectedRoute;
