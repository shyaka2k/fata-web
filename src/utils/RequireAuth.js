import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Simple auth check: looks for a token in localStorage
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));

  if (!isAuthenticated) {
    // Redirect to login, preserve attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
