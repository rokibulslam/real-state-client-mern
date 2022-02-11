import React from 'react';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
 
const Features = () => {
    return (
      <div className="my-5 py-5 text-start">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>GREAT FEATURES</p>
              <h1>
                Classic Interiors & <br />
                Exteriors
              </h1>
              <p>
                Generously sized, this home delivers the very <br /> best
                Interiors & exteriors.
              </p>
              <button className="banner-btn">Buy Apartment</button>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <span>
                      <FontAwesomeIcon icon={faHome} size="4x" />
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
                      <FontAwesomeIcon icon={faHome} size="4x" />
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
                      <FontAwesomeIcon icon={faHome} size="4x" />
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
                      <FontAwesomeIcon icon={faHome} size="4x" />
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