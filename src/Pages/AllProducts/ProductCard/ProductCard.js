import { fontWeight } from '@mui/system';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Product.css'

const ProductCard = (props) => {
  const { product } = props
  
    return (
      <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
        <Card className="card-container ">
          <Card.Img
            style={{ borderRadius: "5px", width: "300px", height: "300px" }}
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
            <Card.Title>
              <NavLink
                className="card-title"
                to={`/home/purchase/${product?._id}`}
              >
                {product?.Name}
              </NavLink>
            </Card.Title>
            <p
              style={{
                background: "transparent",
                border: "0",
                fontSize: "20px",
                fontWeight: "bold",
                paddingRight: "20px",
                paddingTop: "5px",
              }}
            >
              ${product?.Price}
            </p>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ProductCard;