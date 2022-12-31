import { CircularProgress } from '@mui/material';
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'

const AdminRoute = ({children}) => {
  const { user, isLoading, admin } = useAuth();
  let location = useLocation()
  if (isLoading) {
    return <CircularProgress />;
  }
  if (user && admin) {
    return children;
  }
  return (
    <Navigate to="/login" state={{from: location}} ></Navigate>
  )
}

export default AdminRoute