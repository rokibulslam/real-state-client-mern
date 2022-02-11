import React from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} size="2x" />;
  const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />;
  const instgaram = <FontAwesomeIcon icon={faInstagram} size="2x" />;
  return (
    <div>
      <div className="footer-bg overflow-hidden text-white fw-light p-5">
        <h1 className="fs-1 text-center pb-3 text-warning">MY HOME</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold ">Help</li>
                <li>Search</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Shipping Details</li>
                <li>Fraud Awarness</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold ">Information</li>
                <li>Search Terms</li>
                <li>Advance Search</li>
                <li>Store Location</li>
                <li>Help & Faq's</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold ">Contact Us</li>
                <li>
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  No: A, East Madison
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  0000-1234556
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  9.30AM - 7.30PM
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold">
                  Get special offers and more from MY HOME
                </li>
              </ul>
              <Form.Control type="email" placeholder="Enter Your Email" />
              <button className="m-3 banner-btn">Subscribe</button>
              <p>Connect With Us</p>
              <div>
                <a
                  className="px-2 footer-icon"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  {facebook}
                </a>
                <a
                  className="px-2 footer-icon"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  {instgaram}
                </a>
                <a
                  className="px-2 footer-icon"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  {twitter}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          className="text-white bg-dark py-3 px-5 mb-0
                text-center"
        >
          Copyright © 2022. All Rights Reserved by MY HOME
        </p>
      </div>
    </div>
  );
};

export default Footer;
