import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = Cookies.get('userToken');

    if (!token) {
        return <Navigate to="/auth" />;  
    } 

    return <>{children}</>;  // Render protected children if token exists
};

export default ProtectedRoute;
