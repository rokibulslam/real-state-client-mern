import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { createOrder, resetOrder } from "../../Redux/actions/orderAction";
import Navigation from "../Home/Navigation/Navigation";


const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const price = useSelector((state) => state.cart.grandTotal);
  const { orderData, loading, error } = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  const publishableKey =
    "pk_test_51MPzTAKcVvQYjNCovrqhew1waPqjnlObanHZegNIOt3YxzqaFECl2xdM7bA6gAiNLBNBoslCn6UyBVy5nfAIFBoX00PW2cRFR7";
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
  useEffect(() => {
    if (cart.cart.length === 0) {
      navigate("/cart");
    }
    else if (!cart.shippingAdress.name) {
      navigate("/shippingAdress");
    }
  }, []);
  const payNow = (token) => {
      const data = {
        userEmail: user?.email,
        paymentMethod: "stripe",
        date: currentDate,
        ...cart,
        token,
      }
      dispatch(createOrder(data));
  };
  useEffect(() => {
    if (orderData.acknowledged) {
      console.log(orderData);
      handleSuccess();
      navigate("/dashboard");
      dispatch(resetOrder());
    } else if (error) {
      console.log(error);
      handleFailure();
    }
  }, [orderData, error]);



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
            <span className="red-trans-btn">Grand Total:</span>
            <span className="red-trans-btn">$ {cart.grandTotal}</span>
          </div>
        </div>
        <StripeCheckout
          stripeKey={publishableKey}
          label={loading ? `Processing...` : `Pay Now`}
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

export default Order;
