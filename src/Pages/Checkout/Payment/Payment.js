import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { createOrder, deletCart } from "../../../Redux/actions/cartAction";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Home/Navigation/Navigation";

const Payment = () => {
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId]=useState('')
  
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useAuth();
  const price = useSelector((state) => state.cart.grandTotal);
  const shippingAdress = useSelector((state) => state.cart.shippingAdress);
  const cart = useSelector((state) => state.cart);
  const publishableKey =
    "pk_test_51MPzTAKcVvQYjNCovrqhew1waPqjnlObanHZegNIOt3YxzqaFECl2xdM7bA6gAiNLBNBoslCn6UyBVy5nfAIFBoX00PW2cRFR7"
  const priceForStripe = price * 100;
  const handleSuccess = () => {
    Swal.fire("Your Order Has Been Placed!");
  };
  const handleFailure = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const payNow = async (token) => {
    setProcessing(true)
    try {
      const response = await axios({
        url: "http://localhost:5000/orders",
        method: "post",
        data: {
          userEmail:user.email,
          paymentMethod: "stripe",
          date:currentDate,
          price,
          shippingAdress,
          cart,
          token,
        },
      });

      if (response.status === 200) { 
        handleSuccess()
        setProcessing(false)
        dispatch(deletCart())
        navigate("/dashboard");
        console.log(response);
      }
    } catch (error) {
      setProcessing(false)
      handleFailure()
      console.log(error);
    }
  };
  
  return (
    <div>
      <Navigation></Navigation>
      <div className="d-flex w-100 min-vh-100 flex-column justify-content-center container">
        <h1>Order Details</h1>
        <div className="">
          <div>
            {cart.cart.map((product, index) => (
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-0">{product.Name}</p>
                  <p className="text-start">
                    <span>$ {product.Price}</span> *{" "}
                    <span>{product.quantity}</span>
                  </p>
                </div>
                <div>
                  <p>Total: ${product.Price * product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{ color: "blue" }}
            className="d-flex w-100 justify-content-between"
          >
            <span>Shipping Cost:</span>
            <span>$ {cart.shipping}</span>
          </div>
          <hr />
          <div
            className="d-flex w-100 justify-content-between"
            style={{ color: "red" }}
          >
            <span>Grand Total:</span>
            <span>$ {cart.grandTotal}</span>
          </div>
        </div>
        <StripeCheckout
          stripeKey={publishableKey}
          label={processing ? `Processing...` : `Pay Now`}
          name="Pay With Credit Card"
          shippingAddress
          billingAddress
          amount={priceForStripe}
          description={`Your total is $${price}`}
          token={payNow}
        />
      </div>
    </div>
  );
};

export default Payment;
