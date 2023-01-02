import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Contact.css'


const Contact = () => {
  const handleOnclick = (e) => {
    setTimeout(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mail Has Been Send Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }, 800);
    e.preventDefault()
  }

    return (
      <div>
        <Navigation></Navigation>
        <div className=" contact-header mt-5 py-5 mb-5">
          <h1 className="fs-1 pt-5 fw-bolder">CONTACT WITH US</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="m-2 p-2 contact-info">
                <h4 className="banner-text">Working Hours</h4>
                <p>
                  Monday - Friday 8.00 - 23.00 <br />
                  Monday - Friday 8.00 - 23.00
                </p>
              </div>
              <p></p>
            </div>
            <div className="col-md-4 col-sm-12 ">
              <div className="m-2 p-2 contact-info">
                <h4 className="banner-text">Contact Us</h4>
                <p>
                  0000-98982394
                  <br /> rokibul1003@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 ">
              <div className="m-2 p-2 contact-info">
                <h4 className="banner-text">Get Direction</h4>
                <p>
                  132, My Street <br /> England
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 m-y5">
          <div className="container">
            <form action="" method="" onSubmit={handleOnclick}>
              <div class="form-group row d-flex flex-column align-items-center  justify-content-center">
                <label
                  for="email_address"
                  class="col-md-4 col-form-label text-md-right"
                ></label>
                <div class="col-md-6">
                  <input
                    type="email"
                    id="email_address"
                    class="form-control"
                    name="email-address"
                    placeholder="Enter Your Email"
                    required
                    autofocus
                  />
                </div>
                <label
                  for="message"
                  class="col-md-4 col-form-label text-md-right"
                ></label>
                <div class="col-md-6">
                  <textarea
                    type="text"
                    id="message"
                    class="form-control"
                    name="email-address"
                    placeholder="Write Your Message"
                    required
                    autofocus
                  />
                </div>
                <div>
                  <button type="submit" class="btn btn-primary  m-3">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Contact;