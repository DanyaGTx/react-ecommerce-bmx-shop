import React, { useContext } from 'react'
import { AuthContext } from '../../context';
import '../MyButton/MyButton.css'

const MyButton = ({addToCartAndDelete,children,type}) => {
  
  return (
    <div className='myBytton-block'>
      <button onClick={addToCartAndDelete} className={type}>{children}</button>
    </div>
    
  )
}

export default MyButton;