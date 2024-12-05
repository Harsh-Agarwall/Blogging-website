import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
//this ensures that user can't enter restricted pages without login
//for example create post,read more about post
//it is used in the app.js
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
