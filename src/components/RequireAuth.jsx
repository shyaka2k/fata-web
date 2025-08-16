import React from "react";
import { Navigate } from "react-router-dom";

// Checks for a token in localStorage (or you can use context/api)
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
