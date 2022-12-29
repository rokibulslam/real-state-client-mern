import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productsListAction } from '../../../Redux/actions/productAction';

import ProductCard from '../ProductCard/ProductCard';

const AllProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList);
  const {loading, products } = productList;
 

  useEffect(() => {
    dispatch(productsListAction());
  },[])
  
     
     return (
       <div className="py-5">
         {!loading && (
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
           <div className="row g-5 ">
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

export default AllProduct;