import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
import profile from "../../../Images/profile.png";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="nav-text-color me-5 fs-1" href="#home">
            MYHome
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className="  text-decoration-none me-3 nav-text-color fs-5"
                href="#features"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-decoration-none me-3 nav-text-color fs-5"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/productPage"
                className="nav-text-color text-decoration-none me-3 fs-5"
              >
                Apartments
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none me-3 nav-text-color fs-5"
              >
                Contact
              </NavLink>
            </Nav>
            {user.email ? (
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  {user.photoURL ? (
                    <img
                      style={{
                        height: "45px",
                        width: "45px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      style={{
                        height: "45px",
                        width: "45px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src={profile}
                      alt=""
                    />
                  )}
                </span>
                <p className="text-white text-decoration-none me-3 mb-lg-0">
                  {user.displayName}
                </p>
                <p
                  className="logout-button  text-decoration-none me-3 mb-lg-0 nav-text-color fs-5"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="nav-text-color text-decoration-none me-3"
              >
                <p className="logout-button text-white text-decoration-none me-3 mb-lg-0 fs-5">
                  Login
                </p>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
