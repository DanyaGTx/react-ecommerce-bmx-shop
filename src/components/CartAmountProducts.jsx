import React from 'react'

const CartAmountProducts = ({quantity = 0}) => {
  return (
    <div className='amountProductOfCart'><span>{quantity}</span></div>
  )
}

export default CartAmountProducts