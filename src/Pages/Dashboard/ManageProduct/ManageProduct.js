import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Card  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Component/LoadingSpinner";
import { deleteProduct, productsListAction } from "../../../Redux/actions/productAction";

const ManageProduct = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const { products, loading, isSuccess } = useSelector(
    (state) => state.productList
  );
  // Load Apartments from Apartment API
    useEffect(() => {
      dispatch(productsListAction())
  }, [dispatch, isSuccess]);

  // Delete a Food Item
  const handleDeleteApartment = (id) => {
    const confirm = window.confirm(
      "Are You Sure? You are going to delete Product"
    );
      if (confirm) {
      dispatch(deleteProduct(id))
    }
  };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product has been Deleted Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [isSuccess]);
  return (
    <div className="my-5">
      <div className="container">
        <h1 className="">
          <i>Manage Apartments</i>
        </h1>
        {loading && <LoadingSpinner />}
        <div className="py-5">
          <div className="row g-5">
            {products?.map((product) => (
              <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                
                <Card className="card-container">
                  <Card.Img
                    className="img-fluid"
                    style={{ borderRadius: "5px", height: "250px" }}
                    variant="top"
                    src={product?.Image}
                  />
                  {product?.Category === "Featured" ? (
                    <div>
                      <span className="discount-text">20% Free</span>
                      <span className="card-img-text">{product?.Category}</span>
                    </div>
                  ) : (
                    <span className="card-img-text">{product?.Category}</span>
                  )}
                  <Card.Body className="text-start">
                    <Card.Title
                      style={{ color: "rgb(134, 80, 25)", fontSize: "30px" }}
                    >
                      {product?.Name}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <p
                        style={{
                          background: "transparent",
                          border: "0",
                          fontSize: "20px",
                          fontWeight: "bold",
                          paddingRight: "20px",
                        }}
                      >
                        ${product?.Price}
                      </p>

                      <button
                        onClick={() => handleDeleteApartment(product._id)}
                        className="card-btn"
                      >
                        Delete Apartment
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
