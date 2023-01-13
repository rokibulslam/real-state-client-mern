import React from 'react'
import OrderSummary from './OrderSummary/OrderSummary'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'

const Checkout = () => {
  return (
    <div className='row'>
      <div className='col-6'>
        <Shipping />
      </div>
      <div className='col-6'>
        <OrderSummary />
        <Payment />
      </div>
    </div>
  )
}

export default Checkout