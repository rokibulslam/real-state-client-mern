import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../Component/Cart/Cart';
import Navigation from '../Home/Navigation/Navigation';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart.cart)
  
  let data;
  if (!cart.length) {
    data = (<h1>Your Cart is Empty</h1>)
  } else if (cart.length) {
    data = (
      <Cart cart={cart} />
    );
  }
  return (
    <div>
      <Navigation></Navigation>
      <div className='pt-5 mt-5'>
        <div className="container-fluid">
         {data}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart