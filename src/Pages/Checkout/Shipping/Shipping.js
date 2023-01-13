import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Shipping = () => {
  const [radio, setRadio] = useState('')
  const [formData, setFormData] = useState('');
  const handleForm = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  const handleInputField = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value
    setFormData(newFormData);
  }
  return (
    <form onSubmit={handleForm}>
      <div class="form-floating">
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
      <div class="form-floating mb-3">
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

      <div class="form-floating">
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
      <div class="form-floating">
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
      <div class="form-floating">
        <input
          name="date"
          onBlur={handleInputField}
          type="text"
          class="form-control"
          id="floatingtext"
          placeholder="Date"
          required
        ></input>
        <label for="floatingtext">Date</label>
      </div>
      {/* Stripe  */}
      <Form.Check
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
      />
      {/* Others method  */}

      <button type="submit" className="">
        Continue
      </button>
    </form>
  );
};

export default Shipping;
