import { fontWeight } from '@mui/system';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const ProductCard = (props) => {
  const { product } = props
  
    return (
      <Card style={{ width: "30rem" }}>
        <Card.Img
          style={{ height: "300px", borderRadius: "10px" }}
          variant="top"
          src={product?.Image}
        />
        <Card.Body className="text-start">
          <Card.Title style={{ color: "rgb(134, 80, 25)" }}>
            {product?.Name}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center px-4">
            <p
              style={{
                background: "transparent",
                border: "0",
                color: "rgb(134, 80, 25)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              ${product?.Price}
            </p>
            <NavLink to={`/home/purchase/${product?._id}`}>
              <button
                style={{
                  background: "transparent",
                  border: "0",
                  color: "goldenrod",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Details
              </button>
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    );
};

export default ProductCard;