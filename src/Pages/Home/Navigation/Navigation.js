import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import {  NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
import profile from "../../../Images/profile.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navigation = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate('/login')
    logout()
  }
  return (
    <div>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand
            style={{ color: "rgb(134, 80, 25)" }}
            className=" me-5 fw-bolder fs-1"
            href="#home"
          >
            MYHome
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
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
            <div className="d-flex justify-content-center align-items-center">
              {user?.email ? (
                <div className="d-flex justify-content-center align-items-center">
                  <span>
                    {user.photoURL ? (
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
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
                  <p className="text-success text-decoration-none me-3 mb-lg-0">
                    {user.displayName}
                  </p>
                  <p
                    className="logout-button  text-decoration-none me-3 mb-lg-0 nav-text-color fs-5"
                    onClick={()=>handleLogOut()}
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-text-color text-decoration-none me-3"
                >
                  <p className="logout-button text-decoration-none me-3 mb-lg-0 fs-5">
                    Login
                  </p>
                </NavLink>
              )}
              <NavLink style={{color:'green'}} to="/cart">
                <span style={{ position: "relative" }}>
                  <span
                    className="shopping-cart"
                  >
                    <span style={{fontSize:'11px', fontWeight:'bolder'}}>{cart.length}</span>
                  </span>
                  <AiOutlineShoppingCart size={30} />
                </span>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
