import React from 'react';
import { Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
 
    return (
      <div className="banner-bg d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 ">
              <div className="text-start banner-text rounded">
                <p>
                  <u>Aragon Ave, Coral Gables, FL 33134</u>
                  <h1 className='pt-4'>Gables Grand Plaza <br/> Apartments</h1>
                  <p className='py-4'>
                    Our premium furnished apartments feature allow you and your <br/> 
                    favorite pet to enjoy all at Gables Grand Plaza!
                  </p>
                  <div className='row'>
                    <h1 className='col-md-6'>$625,000</h1>
                    <button className="banner-btn col-md-6">Buy Apartment</button>
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

