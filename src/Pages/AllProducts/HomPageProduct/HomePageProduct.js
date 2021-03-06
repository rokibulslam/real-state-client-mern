import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const HomePageProduct = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading]=useState(false)
  useEffect(() => {
      setIsLoading(true)
        fetch("https://immense-wildwood-96183.herokuapp.com/apartments")
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .finally(()=>setIsLoading(false))
    }, [])
    
    return (
      <div className="py-5">
        <h1 className='py-4 pb-5'>Explore Our Apartments Collection</h1>
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
          <div className="row g-5">
            {products.slice(0, 6)?.map((product) => (
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