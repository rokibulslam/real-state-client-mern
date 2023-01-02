import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState("");
    
    useEffect(() => {
        fetch("https://pink-combative-kangaroo.cyclic.app/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data));
    }, [update])
  const tHead = [
    "Product",
    "Ordered By",
    "Email",
    "Date",
    "Price",
    "Status",
    "Manage",
  ];
    const handlePending = (id, text) => {
      axios
        .put(`https://pink-combative-kangaroo.cyclic.app/order/status/${id}`, {
          status: text,
        })
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Order has been ${text}`,
              showConfirmButton: false,
              timer: 2000,
            });
            setUpdate(res.data);
          }
        });
    };

    const handleDelete = (id) => {
      const confirm = window.confirm(
        "Are You Sure? You are going to cancel your order"
      );

      if (confirm) {
        axios
          .delete(
            `https://pink-combative-kangaroo.cyclic.app/order/delete/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Order has been Cancelled Successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .then((data) => setUpdate(data));
      }
    };
    return (
      <div className="my-0 p-5 bg-white banner-text">
        <div className="container">
          <div>
            <h1 className="fw-bold mb-5">Manage All Orders</h1>
            <Table responsive striped bordered hover>
              <thead>
                <tr className="">
                  {tHead.map((item, index) => (
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              {orders?.map((order) => (
                <tbody>
                  <tr className="py-5">
                    <td>
                      {console.log(order)}
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                            marginLeft: "3px",
                          }}
                          src={order.Image}
                          alt=""
                        />
                        {order.Name}
                      </div>
                    </td>
                    <td>{order.customerName}</td>
                    <td>{order.email}</td>

                    <td>{order.date}</td>
                    <td className="fw-bold">${order.Price}</td>
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