import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  let location = useLocation();
  console.log(user)
  if (isLoading) {
    return <CircularProgress />;
  }

  if (user && !admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
