import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productsListAction } from '../../../Redux/actions/productAction';
import ProductCard from '../ProductCard/ProductCard';

const HomePageProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state?.productList);
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(productsListAction())
  }, [dispatch]);
    
    return (
      <div className="py-5">
        <h1 className='py-4 pb-5'>Explore Our Apartments Collection</h1>
        {loading && (
          <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </div>
        )}
        <div className="container">
          <div className="row g-5">
            {products?.slice(0, 6)?.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                className="col-md-3 col-sm-12"
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default HomePageProduct;