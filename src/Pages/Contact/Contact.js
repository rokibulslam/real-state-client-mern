import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Contact.css'


const Contact = () => {
  const handleOnclick = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mail Has Been Send Successfully",
      showConfirmButton: false,
      timer: 2000,
    });
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
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button onClick={handleOnclick} type="submit"  className="btn-danger">
              Submit
            </Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Contact;