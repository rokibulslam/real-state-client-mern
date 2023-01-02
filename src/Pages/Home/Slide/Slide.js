import React from 'react';
import Slider from "react-slick";
import img1 from '../../../Images/Apartment/slide-one-f-1.jpg'
import img2 from "../../../Images/Apartment/slide-two.jpg";
import img3 from "../../../Images/Apartment/slider-2-1-680x510.jpg";
import './Slide.css'

const Slide = () => {
  // React Slick slider 
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
    return (
      <div className="py-5 px-sm-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 justify-content-center align-items-center">
              <Slider {...settings}>
                <div>
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src={img1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src={img2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src={img3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            <div className="col-lg-6 col-md-12 px-5 text-start slide-header">
              <h1>Amenities</h1>
              <p>
                In property and land use planning, amenity is something
                considered to benefit a location, contribute to its enjoyment,
                and thereby increase its value.
              </p>
              <div className="row li-item">
                <div className="col-md-6 ">
                  <ul>
                    <li>Clubhouse</li>
                    <li>Fitness Center</li>
                    <li>Gated</li>
                    <li>Courtyard</li>
                    <li>Central Heating</li>
                    <li>Air Conditioning</li>
                    <li>Free WiFi</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Online Services</li>
                    <li>Health Club Discount</li>
                    <li>Elevator</li>
                    <li>Business Center</li>
                    <li>Alarm System</li>
                    <li>Car Parking</li>
                    <li>Greenbelt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slide;