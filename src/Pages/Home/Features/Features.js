import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Features.css";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div className="feature-bg">
      <div className=" py-5 text-start features d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <p>GREAT FEATURES</p>
                <h1>
                  Classic Interiors & <br />
                  Exteriors
                </h1>
                <p className="pt-4">
                  Generously sized, this home delivers the very <br /> best
                  Interiors & exteriors.
                </p>
                <NavLink to="/productPage">
                  <button className="primary-btn my-5">Buy Apartment</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="row ">
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-flex flex-column">
                      <span>
                        <FontAwesomeIcon
                          className="features-icon"
                          icon={faHome}
                          size="4x"
                        />
                      </span>
                      <h1>Latest Property</h1>
                    </div>
                    <p>
                      Tasteful and seem-less renovation,
                      <br /> this home is a unique refreshing
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-flex flex-column">
                      <span>
                        <FontAwesomeIcon
                          className="features-icon"
                          icon={faHome}
                          size="4x"
                        />
                      </span>
                      <h1>Latest Property</h1>
                    </div>
                    <p>
                      Tasteful and seem-less renovation,
                      <br /> this home is a unique refreshing
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-flex flex-column">
                      <span>
                        <FontAwesomeIcon
                          className="features-icon"
                          icon={faHome}
                          size="4x"
                        />
                      </span>
                      <h1>Latest Property</h1>
                    </div>
                    <p>
                      Tasteful and seem-less renovation,
                      <br /> this home is a unique refreshing
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-flex flex-column">
                      <span>
                        <FontAwesomeIcon
                          className="features-icon"
                          icon={faHome}
                          size="4x"
                        />
                      </span>
                      <h1>Latest Property</h1>
                    </div>
                    <p>
                      Tasteful and seem-less renovation,
                      <br /> this home is a unique refreshing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
