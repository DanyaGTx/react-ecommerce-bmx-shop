import React, { useContext, useState } from 'react'
import CartProducts from './CartProducts';
import cart from '../img/cart.png'
import { useSelector } from 'react-redux';
import CartAmountProducts from './CartAmountProducts';
import { AuthContext } from '../context';

const Cart = () => {
    const bikeItems = useSelector(state => state.cart.itemsInCart);
  
    const {isOpenCart,setIsOpenCabinet}= useContext(AuthContext);

    // Закрытие мой аккаунт если открыли корзину
  const {setOpenCart}= useContext(AuthContext);
    const openAndCloseCart = () => {
        setOpenCart(!isOpenCart);
        setIsOpenCabinet(false);
    }
    return (
        <div className='cart-block'>
            <div className='cart' onClick={openAndCloseCart}>
                {/*Число товаров в корзине*/}
                {bikeItems.length > 0 && <CartAmountProducts quantity={bikeItems.length} />} 
                <li  className={`navigation-item ${isOpenCart && 'activeCart'}`}><img className='cart-ico' src={cart} alt="" /></li>
            </div>
            <div className='openCart'>
                {isOpenCart && (<div className='shopCart'><span onClick={() => setOpenCart(false)} className='shopCart-close'>X</span><CartProducts setOpenCart={setOpenCart} bikeItems={bikeItems}/></div>)}
            </div>
        </div>
    )
}

export default Cart