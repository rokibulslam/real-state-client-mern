import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Register = () => {
  const [userRegisterData, setUserRegisterData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  // Handling input field
  const handleOnBlur = (e) => {
    const nameField = e.target.name;
    const value = e.target.value;
    const finalRegisterData = { ...userRegisterData };
    finalRegisterData[nameField] = value;
    setUserRegisterData(finalRegisterData);
  };
    // handle submit button for register 
  const handleRegisterSubmit = (e) => {
    if (userRegisterData.password !== userRegisterData.password2) {
      alert("Your password did not match");
      return;
    }
    //   Sending parameter to firebase hook for registering user
    registerUser(
      userRegisterData.email,
      userRegisterData.password,
      userRegisterData.name,
      navigate
    );
    e.preventDefault();
  };
  return (
    <Box style={{height: '100vh', display: 'flex'}}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Register Here</h1>

        {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}> */}
        {!isLoading && (
          <form onSubmit={handleRegisterSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="ReType Your Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />
            {isLoading && <CircularProgress />}
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </form>
        )}

        {user?.email && (
          <Alert sx={{ width: "75%", m: 1 }} severity="success">
            User Created successfully!
          </Alert>
        )}
        {authError && (
          <Alert sx={{ width: "75%", m: 1 }} severity="error">
            {authError}
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default Register;
