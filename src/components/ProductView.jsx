import React from 'react'
import { useSelector } from 'react-redux'
import AddAndDeleteToCartButton from './AddAndDeleteToCartButton'
import MyButton from './MyButton/MyButton'
const ProductView = () => {
  const bike = useSelector(state => state.bike.currentBike)
  if(!bike) return null
  return (
    <div className='productView-page'>
        <img src={bike.img} alt="" width={600}/>
        <div className='productView-information'>
            <h1 className='productView-title'>{bike.name}</h1>
            <h2 className='productView-price'>{bike.price}$</h2>
            <p className='productView-details'>{bike.details}</p>
            <AddAndDeleteToCartButton bike={bike}/>
        </div>
        
    </div>
  )
}

export default ProductView