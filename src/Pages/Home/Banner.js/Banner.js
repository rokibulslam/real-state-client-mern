import React from 'react';
import { Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
 
    return (
      <div className="banner-bg p-1 d-flex">
        <div className="container">
          <div className="row justify-content-between align-content-center">
            <div className="col-md-6 ">
              <div></div>
            </div>
            <div className="col-md-6 ">
              <div className="text-start banner-text rounded">
                <p>
                  <u>Aragon Ave, Coral Gables, FL 33134</u>
                  <h1>Gables Grand Plaza</h1>
                  <h1>Apartments</h1>
                  <p>
                    Our premium furnished apartments feature allow you and your
                    favorite pet to enjoy all at Gables Grand Plaza!
                  </p>
                  <div>
                    <h1>$625,000</h1>
                    <button className="banner-btn">Buy Apartment</button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;

