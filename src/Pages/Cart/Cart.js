import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../Component/ProductCard/ProductCard';
import Navigation from '../Home/Navigation/Navigation';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  let data;
  if (!cart.length) {
    data = (<h1>Your Cart is Empty</h1>)
  } else if (cart.length) {
    data =cart.map((product, index)=><ProductCard key={index} product={product} />)
  }
  return (
    <div>
      <Navigation></Navigation>
      <div className='pt-5 mt-5'>{data}</div>
    </div>
  );
}

export default Cart