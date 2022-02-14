import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://immense-wildwood-96183.herokuapp.com/apartments/featured")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    console.log(products);
    return (
      <div>
        <div className="row">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              className="col-md-6 col-sm-12"
            />
          ))}
        </div>
      </div>
    );
};

export default FeaturedProduct;