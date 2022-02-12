import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Home/Navigation/Navigation";
import { Box } from "@mui/system";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, isLoading, authError, loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // Login Control
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSign = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Navigation></Navigation>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="register-header-text">Login Here</h1>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "100%", my: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <Box>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert sx={{ width: "100%", my: 1 }} severity="success">
                  Logged In successfully!
                </Alert>
              )}
              {authError && (
                <Alert sx={{ width: "100%", my: 1 }} severity="error">
                  {authError}
                </Alert>
              )}
            </Box>
            <Button
              sx={{ width: "100%", my: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
        )}
        <Button
          sx={{ width: "50%", my: 1 }}
          onClick={handleGoogleSign}
          variant="contained"
        >
          <img
            style={{ marginRight: "5px" }}
            height="30px"
            width="30px"
            src=""
            alt=""
          />
          Sign In With Google
        </Button>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <br />
          <Button variant="text">Register Here</Button>
        </NavLink>
      </Container>
    </div>
  );
};

export default Login;
