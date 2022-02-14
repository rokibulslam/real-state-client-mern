import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const TopProduct = () => {
     const [products, setProducts] = useState([]);
   useEffect(() => {
     fetch("https://immense-wildwood-96183.herokuapp.com/apartments/top")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   }, []);
    return (
      <div>
        <div className="row g-5">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              className="col-md-6 col-sm-12"
            />
          ))}
        </div>
        </div>
    )
};

export default TopProduct;