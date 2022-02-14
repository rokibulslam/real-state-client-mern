import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const HomePageProduct = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading]=useState(false)
  useEffect(() => {
      setIsLoading(true)
        fetch("https://immense-wildwood-96183.herokuapp.com/apartments/regular")
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .finally(()=>setIsLoading(false))
    }, [])
    console.log(products)
    return (
      <div className="py-5">
        {isLoading && (
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
          <div className="row">
            {products?.map((product) => (
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