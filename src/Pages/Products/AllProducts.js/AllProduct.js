import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Message from '../../../Component/Message';
import ProductCard from '../../../Component/ProductCard/ProductCard';
import { productsListAction } from '../../../Redux/actions/productAction';



const AllProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList);
  const {loading, products, error } = productList;
 
console.log(error)
  useEffect(() => {
    dispatch(productsListAction());
  }, [])
  let data;
  if (loading) {
    data = <div>
             
             <Spinner animation="grow" variant="secondary" />
             <Spinner animation="grow" variant="success" />
             <Spinner animation="grow" variant="danger" />
             <Spinner animation="grow" variant="warning" />
             <Spinner animation="grow" variant="info" />
           </div>
  } else if (error) {
    data = (
      <Message
        message="There was an server side Error!! Please Reload"
        color="danger"
      ></Message>
    )
  } else {
    data = (products?.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        className="col-md-3 col-sm-12"
      />
    )))
  }

     return (
       <div className="py-5">
         <div className="container">
           <div className="row g-5 ">
             {data}
           </div>
         </div>
       </div>
     );
};

export default AllProduct;