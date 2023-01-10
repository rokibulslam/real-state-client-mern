import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, remomveCart } from '../../Redux/actions/cartAction';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const shipping = 30;
  const dispatch = useDispatch();
  const getTotalPrice = (cart) => {
    const totalPrice = cart.reduce(
      (accu, curr) => accu + curr.Price * curr.quantity,
      0
    )
    
    return totalPrice;
  }
  const grandTotal = () => {
    const subTotal = cart.reduce(
      (accu, curr) => accu + curr.Price * curr.quantity,
      0
    );
    const total = subTotal + shipping;
    return total;
  }
  return (
    <div className="row">
      <div className="col-10">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Details</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <th scope="row">
                  <img height="50px" src={product.Image} alt="" />
                </th>
                <th>{product.Name}</th>
                <th>{product.Price}</th>
                <th>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(remomveCart(product))}
                    className="border border-1 p-1"
                  >
                    -
                  </span>
                  <span className="p-2">{product.quantity}</span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(addToCart(product))}
                    className="border border-1 p-1"
                  >
                    +
                  </span>
                </th>
                <th>{product.Price * product.quantity}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-2 d-flex flex-column align-items-start">
        <table className="table">
          <h1>Total</h1>
          <tbody className="text-start">
            <tr>
              <th>Total</th>
              <th>$ {getTotalPrice(cart)}</th>
            </tr>
            <tr>
              <th>Shipping Cost</th>
              <th>$ 30</th>
            </tr>
            <tr>
              <th>Grand Total</th>
              <th>$ {grandTotal(cart)}</th>
            </tr>
          </tbody>
        </table>
        <button
          style={{
            border: 0,
            backgroundColor: "black",
            color: "whitesmoke",
            borderRadius: "2px",
            padding: "0 15px 0px 15px",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart