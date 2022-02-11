import React from 'react';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './Features.css'
const Features = () => {
    return (
      <div className="my-5 py-5 text-start features d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <p>GREAT FEATURES</p>
              <h1>
                Classic Interiors & <br />
                Exteriors
              </h1>
              <p className="pt-4">
                Generously sized, this home delivers the very <br /> best
                Interiors & exteriors.
              </p>
              <button className="banner-btn my-5">Buy Apartment</button>
            </div>
            <div className="col-md-8">
              <div className="row ">
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6">
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
                    Tasteful and seem-less renovation, <br />
                    this home is a unique refreshing
                  </p>
                </div>
                <div className="col-md-6">
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
    );
};

export default Features;