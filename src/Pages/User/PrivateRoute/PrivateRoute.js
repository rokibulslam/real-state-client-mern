import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  const userData = localStorage.getItem('user')
  console.log(userData);
  let location = useLocation();
  
  if (isLoading) {
    return <CircularProgress />;
  }
  if (userData) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
