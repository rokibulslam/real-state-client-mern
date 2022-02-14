import { fontWeight } from '@mui/system';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Product.css'

const ProductCard = (props) => {
  const { product } = props
  
    return (
      <div className="col-md-4 col-sm-12">
        <Card className="card-container">
          <Card.Img
            className="img-fluid"
            style={{ borderRadius: "5px" }}
            variant="top"
            src={product?.Image}
          />
          {product?.Category === "Featured" ? (
            <div>
                <span className="discount-text">
                  20% Free
                </span>
              <span className="card-img-text">{product?.Category}</span>
            </div>
          ) : (
            <span className="card-img-text">{product?.Category}</span>
          )}
          <Card.Body className="text-start">
            <Card.Title style={{ color: "rgb(134, 80, 25)", fontSize: "30px" }}>
              {product?.Name}
            </Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <p
                style={{
                  background: "transparent",
                  border: "0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingRight:'20px'
                }}
              >
                ${product?.Price}
              </p>
              <NavLink to={`/home/purchase/${product?._id}`}>
                <button className="banner-btn">Details</button>
              </NavLink>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ProductCard;