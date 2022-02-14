import React from 'react';
import './Parking.css'


const Parking = () => {
    return (
      <div className="parking">
        <div className="container">
          <div className="row">
            <div className="col-md-2 d-flex d-flex justify-content-center align-items-center">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>3,560</h1>
                <p>Square Feet</p>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center ">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>2</h1>
                <p>Bedrooms</p>
              </div>
            </div>
            <div className="col-md-2 d-flex d-flex justify-content-center align-items-center">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>2</h1>
                <p>Bathrooms</p>
              </div>
            </div>
            <div className="col-md-2 d-flex d-flex justify-content-center align-items-center">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>2021</h1>
                <p>Year Built</p>
              </div>
            </div>
            <div className="col-md-2 d-flex d-flex justify-content-center align-items-center">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>2</h1>
                <p>Car Parking</p>
              </div>
            </div>
            <div className="col-md-2 d-flex d-flex justify-content-center align-items-center">
              <div className="parking-paper d-flex justify-content-center align-items-center flex-column">
                <h1>2</h1>
                <p>Drawing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Parking;