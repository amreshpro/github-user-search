import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user,isLoading } = useAuth0();
  console.log(isAuthenticated,user,isLoading)
  const isUser = isAuthenticated && user;
  if (!isUser) {
    return <Navigate to='/login' />;
  }
  return children;
};
export default PrivateRoute;