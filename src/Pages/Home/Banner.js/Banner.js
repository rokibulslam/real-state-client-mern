import React from 'react';
import { Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
 
    return (
      <div className="banner-bg d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-start d-flex justify-content-center  ">
              <div className="w-75 banner-text rounded">
                <p>
                  <u>Aragon Ave, Coral Gables, FL 33134</u>
                </p>
                <h1 className="pt-4">
                  Gables Grand Plaza <br /> Apartments
                </h1>
                <p className="py-4">
                  Our premium furnished apartments feature allow you and your{" "}
                  <br />
                  favorite pet to enjoy all at Gables Grand Plaza!
                </p>
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <h1>$625,000</h1>
                  </div>

                  <div className="col-md-6">
                    <button className="banner-btn ">Buy Apartment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;

