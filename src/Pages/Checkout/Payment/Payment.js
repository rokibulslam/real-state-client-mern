import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(
  "pk_test_51MPzTAKcVvQYjNCovrqhew1waPqjnlObanHZegNIOt3YxzqaFECl2xdM7bA6gAiNLBNBoslCn6UyBVy5nfAIFBoX00PW2cRFR7"
);
const Payment = () => {
  return (
    <div>
      <h1>Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment