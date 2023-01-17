import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Payment = () => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState(null);
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const price = useSelector((state) => state.cart.grandTotal);
  const shippingAdress = useSelector((state) => state.cart.shippingAdress);
  const cart = useSelector((state) => state.cart);
  const publishableKey =
    "pk_test_51MPzTAKcVvQYjNCovrqhew1waPqjnlObanHZegNIOt3YxzqaFECl2xdM7bA6gAiNLBNBoslCn6UyBVy5nfAIFBoX00PW2cRFR7"
  const priceForStripe = price * 100;
  const handleSuccess = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  const handleFailure = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment",
        method: "post",
        data: {
          amount: price * 100,
          token,
        },
      })
      if (response.status === 200) {
        handleSuccess();
        console.log(response);
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };
  console.log(clientSecret);
  return (
    <div>
      <h1>Payment</h1>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        shippingAddress
        billingAddress
        amount={priceForStripe}
        description={`Your total is $${price}`}
        token={payNow}
      />
    </div>
  );
};

export default Payment;
