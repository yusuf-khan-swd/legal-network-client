import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="h-screen flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;