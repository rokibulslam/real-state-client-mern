import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      setIsLoading(true);
      fetch("https://pink-combative-kangaroo.cyclic.app/apartments/featured")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    }, []);
    console.log(products);
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
          <div className="row g-5">
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

export default FeaturedProduct;