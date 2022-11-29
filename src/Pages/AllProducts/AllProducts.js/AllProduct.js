import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productsListAction } from '../../../Redux/actions/productAction';
import { PRODUCT_LIST_REQUEST } from '../../../Redux/constants/productConstants';
import ProductCard from '../ProductCard/ProductCard';

const AllProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList);
  const {loading, products } = productList;
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    
    dispatch(productsListAction());
  },[dispatch])
  // useEffect(() => {
  //       setIsLoading(true);
  //      fetch("https://immense-wildwood-96183.herokuapp.com/apartments")
  //        .then((res) => res.json())
  //        .then((data) => setProducts(data))
  //        .finally(() => setIsLoading(false));
  //    }, []);
     
     return (
       <div className="py-5">
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