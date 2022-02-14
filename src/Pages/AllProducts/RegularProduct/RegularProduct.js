import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const RegularProduct = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
     fetch("https://immense-wildwood-96183.herokuapp.com/apartments/regular")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   }, []);
    return (
      <div className="py-5">
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

export default RegularProduct;