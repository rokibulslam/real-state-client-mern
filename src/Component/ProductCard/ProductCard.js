import { fontWeight } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartAction';
import'./Product.css'

const ProductCard = ({product}) => {
  
  const dispatch = useDispatch()
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
              <h4 className="te fw-bold">${product?.Price}</h4>
              {product && <span style={{cursor: 'pointer'}} onClick={()=>dispatch(addToCart(product))}>
                <BsCartPlusFill size={30} />
              </span>}
            </div>

            <p className="description">
              {product?.Description.replace(/^(.{80}[^\s]*).*/, "$1")}....
            </p>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ProductCard;