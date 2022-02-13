import { fontWeight } from '@mui/system';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const ProductCard = (props) => {
  const {product} = props
    return (
      <Card style={{ width: "30rem" }}>
        <Card.Img
          style={{ height: "300px", borderRadius: "10px" }}
          variant="top"
          src="holder.js/100px180?text=Image cap"
        />
        <Card.Body className="text-start">
          <Card.Title>Card Title</Card.Title>
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
              $Price
            </p>
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
          </div>
        </Card.Body>
      </Card>
    );
};

export default ProductCard;