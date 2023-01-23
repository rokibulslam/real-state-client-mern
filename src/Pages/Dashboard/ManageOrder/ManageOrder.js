import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteAorder, getALLOrder, updateAnOrder } from '../../../Redux/actions/orderAction';

const ManageOrder = () => {
    // const [orders, setOrders] = useState([]);
    // const [update, setUpdate] = useState("");
  const dispatch = useDispatch()
  const { orderData, loading, isSuccess, update } = useSelector(
    (state) => state.manageOrder
  );
    useEffect(() => {
        dispatch(getALLOrder())
    }, [update, dispatch, isSuccess])
  const tHead = [
    "Product",
    "Shipping",
    "Price",
    "Status",
    "Manage",
  ];
    const handlePending = (id, text) => {
      dispatch(updateAnOrder(id, text))
    };
  useEffect(() => {
    if (update) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order Status Updated Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
  }, [update])
  
    const handleDelete = (id) => {
      const confirm = window.confirm(
        "Are You Sure? You are going to cancel your order"
      );

      if (confirm) {
        dispatch(deleteAorder(id))
      }
    };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order deleted Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [isSuccess]);
    return (
      <div className="my-0 p-5 bg-white banner-text">
        <div className="container">
          <div>
            <h1 className="fw-bold mb-5">Manage All Orders</h1>
            <Table responsive striped bordered hover>
              <thead>
                <tr className="">
                  {tHead.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              {orderData?.map((order) => (
                <tbody>
                  <tr className="py-5">
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
                            <p className="mb-0 ">
                              Quantity: {product.quantity}
                            </p>
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
                    <td className="fw-bold">
                      <p style={{ color: "red" }}>$ {order.totalPrice}</p>
                      <p className="mb-0">Payment By {order.paymentBy}</p>
                      <p className="mb-0">
                        TransactionId {order.transactionId}
                      </p>
                    </td>
                    {order.status === "Pending" ? (
                      <td>
                        <span
                          style={{
                            color: "black",
                            backgroundColor: "#7FFF00",
                            margin: "0px",
                            padding: "3px 5px",
                            borderRadius: "3px",
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                    ) : (
                      <td>
                        <span
                          style={{
                            color: "black",
                            backgroundColor: "#00FFFF",
                            margin: "0px",
                            padding: "3px 5px",
                            borderRadius: "3px",
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                    )}

                    <td>
                      <DropdownButton
                        size="sm"
                        className=""
                        variant="secondary"
                        title="Manage Order"
                      >
                        <Dropdown.Item href="#/action-1">
                          <button
                            style={{
                              color: "black",
                              border: "0px",
                              backgroundColor: "#00FFFF",
                              borderRadius: "3px",
                            }}
                            onClick={() => handlePending(order._id, "Approved")}
                          >
                            Approve
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <button
                            style={{
                              color: "black",
                              border: "0px",
                              backgroundColor: "#FFFF00",
                              borderRadius: "3px",
                            }}
                            onClick={() => handlePending(order._id, "Shipping")}
                          >
                            Shipping
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <button
                            style={{
                              color: "white",
                              border: "0px",
                              backgroundColor: "red",
                              borderRadius: "3px",
                            }}
                            onClick={() => handleDelete(order._id)}
                          >
                            Reject Order
                          </button>
                        </Dropdown.Item>
                      </DropdownButton>
                      <br />
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
    );
};

export default ManageOrder;