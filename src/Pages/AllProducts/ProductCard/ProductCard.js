import { fontWeight } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Product.css'

const ProductCard = (props) => {
  const { product } = props
    return (
      <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
        <Card className="card-container overflow-hidden">
          <Card.Img
            className="fluid card-img"
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
            <Card.Title>
              <h3>{product?.Name}</h3>
            </Card.Title>
            <div className="d-flex justify-content-between">
              <h4 className='te fw-bold'>${product?.Price}</h4>
              <NavLink to={`/home/purchase/${product?._id}`}>
                <button className="card-btn">Book Now</button>
              </NavLink>
            </div>

            <p className='description'>
              {product?.Description.replace(/^(.{80}[^\s]*).*/, "$1")}....
            </p>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ProductCard;