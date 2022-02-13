import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../../Images/profile.png";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const [nav, setNav] = useState(false)
  const {logout, user} = useAuth() 

  const changeBackground = () => {
    
    if (window.scrollY >= 80) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <div>
      <Navbar
        className={nav ? "nav-bg" : "nav-bg-active"}
        collapseOnSelect
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="  me-5 fs-1" href="#home">
            MYHOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className="  text-decoration-none me-3  fs-5"
                href="#features"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-decoration-none me-3  fs-5"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/productPage"
                className=" text-decoration-none me-3 fs-5"
              >
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none me-3  fs-5"
              >
                Contact
              </NavLink>
            </Nav>

            <div className="d-flex justify-content-center align-items-center">
              <span>
                {user.photoURL ? <img
                      style={{
                        height: "45px",
                        width: "45px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                      :
                <img
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src={profile}
                  alt=""
                />}
              </span>
              <p className="text-decoration-none me-3 mb-lg-0">{user.displayName}</p>
              {user.email && <p
                className="logout-button  text-decoration-none me-3 mb-lg-0  fs-5"
                onClick={logout}
              >
                Logout
              </p>}
            </div>

            <NavLink
              to="/login"
              className=" text-decoration-none me-3"
            >
              {!user.email && <p className="logout-button  text-decoration-none me-3 mb-lg-0 fs-5">
                Login
              </p>}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
