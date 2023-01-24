import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAorder, getMyOrder } from "../../../Redux/actions/orderAction";
import LoadingSpinner from "../../../Component/LoadingSpinner";


const MyOrder = () => {
  const { user } = useAuth();
  const dispatch = useDispatch()
  const { orderData, isSuccess, loading } = useSelector((state) => state.manageOrder);
  // Get Ordered food by customer email
  useEffect(() => {
    dispatch(getMyOrder(user?.email));
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order has been Cancelled Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [isSuccess]);
  
  
  // Delete Ordered Food Item by ID
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are You Sure? You are going to cancel your order"
    );

    if (confirm) {
      dispatch(deleteAorder(id))  
    }
  };

  return (
    <div className="my-5">
      <h1 className="fw-normal bg-white">My Orders</h1>
      {loading && <LoadingSpinner />}
      {orderData.length ? (
        <div className="container">
          <Table bordered hover responsive className="">
            <thead>
              <tr className="">
                <th>Product</th>

                <th>Order Details</th>
                <th>Placed</th>
                <th>Status</th>
                <th>Manage</th>
                <th>Price</th>
              </tr>
            </thead>
            {orderData?.map((order) => (
              <tbody key={order._id}>
                <tr className="py-5 bg-white text-black">
                  <td>
                    {order.cartItem.map((product, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center justify-content-between mb-2 text-end"
                      >
                        <img
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                            marginLeft: "3px",
                          }}
                          src={product.Image}
                          alt=""
                        />
                        <div>
                          <p className="mb-0 ">{product.Name}</p>
                          <p className="mb-0 ">Quantity: {product.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    <p className="mb-0 ">{order.shippingAddress.email}</p>
                    <p className="mb-0">{order.shippingAddress.name}</p>
                    <p className="mb-0 ">{order.shippingAddress.address}</p>
                    <p className="mb-0 ">{order.shippingAddress.country}</p>
                    <p className="mb-0">{order.date}</p>
                  </td>

                  <td>{order.date}</td>
                  {order.status === "Approved" ? (
                    <td>
                      <span
                        style={{
                          color: "white",
                          backgroundColor: "rgb(3, 194, 194)",
                          margin: "0px",
                          padding: "5px 8px",
                          borderRadius: "3px",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span
                        className="blue-trans-btn"
                      >
                        {order.status}
                      </span>
                    </td>
                  )}
                  <td>
                    <button
                      style={{
                        color: "white",
                        border: "0px",
                        backgroundColor: "red",
                        borderRadius: "3px",
                      }}
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel Order
                    </button>
                  </td>
                  <td>
                    <p className="red-trans-btn d-inline">$ {order.totalPrice}</p>
                    <p className="mb-0">Payment By {order.paymentBy}</p>
                    <p className="mb-0">TransactionId {order.transactionId}</p>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      ) : (
        <h1>You have 0 Orders</h1>
      )}
    </div>
  );
};

export default MyOrder;
