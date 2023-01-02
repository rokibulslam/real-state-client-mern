import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Message from '../../../Component/Message';
import ProductCard from '../../../Component/ProductCard/ProductCard';


const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError]=useState("")
  // Get Featured product From Database 
  useEffect(() => {
      setIsLoading(true);
      fetch("https://pink-combative-kangaroo.cyclic.app/apartments/featured")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((er)=>setError(er))
        .finally(() => setIsLoading(false));
  }, []);
  let data;
  if (isLoading) {
    data = (
      <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  } else if (error) {
    data = (
      <Message
        message="There was an server side Error!! Please Reload"
        color="danger"
      ></Message>
    );
  } else {
    data = products?.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        className="col-md-3 col-sm-12"
      />
    ));
  }
    return (
      <div className="py-5">
        <div className="container">
          <div className="row g-5">
            {data}
          </div>
        </div>
      </div>
    );
};

export default FeaturedProduct;