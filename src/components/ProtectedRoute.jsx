import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ token, children }) => {
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children; // If logged in, render the children
};

export default ProtectedRoute;