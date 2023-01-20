import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveShippingAdress } from "../../../Redux/actions/cartAction";


const Shipping = () => {
  // const [radio, setRadio] = useState('')
  const [formData, setFormData] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleForm = (e) => {
    e.preventDefault()
    dispatch(saveShippingAdress(formData));
    navigate("/payment")
  }
  const handleInputField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value
    setFormData(newFormData);
  }
  return (
    <div style={{backgroundColor:'black'}} className="d-flex min-vh-100 align-items-center justify-content-center flex-column">
      <h1 className="text-white">Shipping Adress</h1>
      <form className="w-50" onSubmit={handleForm}>
        <div class="form-floating m-3">
          <input
            name="name"
            onBlur={handleInputField}
            type="text"
            class="form-control"
            id="floatingtext"
            placeholder="Your Name"
            required
          ></input>
          <label for="floatingtext">Your Name</label>
        </div>
        <div class="form-floating m-3">
          <input
            name="email"
            onBlur={handleInputField}
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          ></input>
          <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating m-3">
          <input
            name="country"
            onBlur={handleInputField}
            type="text"
            class="form-control"
            id="floatingtext"
            placeholder="Country"
            required
          ></input>
          <label for="floatingtext">Country</label>
        </div>
        <div class="form-floating m-3">
          <textarea
            name="address"
            onBlur={handleInputField}
            type="text"
            class="form-control"
            id="floatingtext"
            placeholder="Address"
            required
          ></textarea>
          <label for="floatingtext">Address</label>
        </div>
        
        {/* Stripe  */}
        {/* <Form.Check
          onClick={() => setRadio("stripe")}
          reverse
          label={radio}
          name="group1"
          type="radio"
          id={`reverse-radio-2`}
        />
        <Form.Check
          onClick={() => setRadio("Other")}
          reverse
          label={radio}
          name="group1"
          type="radio"
          id={`reverse-radio-2`}
        /> */}
        {/* Others method  */}
        <button type="submit" className="">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Shipping;
