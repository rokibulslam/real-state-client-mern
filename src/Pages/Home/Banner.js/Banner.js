import React from 'react';
import './Banner.css'
import img from '../../../Images/h1_slider_img1.png'
const Banner = () => {
    return (
      <div className="banner-bg py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-sm-12 text-start">
              <div>
                <h3>THE TRENDY</h3>
                <h1 className='fs-1 fw-bolder'>CAMELBACK</h1>
                <p>
                  FurnitureBari.com offers a unique selection of stylish,
                  contemporary, and chic furniture online. Our online furniture
                  range includes sofas, beds, dining tables, TV units,
                  wardrobes, dressing tables, and lots more. All our wooden
                  furniture designs are available online at furniturebari.com.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img className="img-fluid py-5" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;