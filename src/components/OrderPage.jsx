import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deleteBin from '../img/delete-bin.png'
import { deleteItemFromCart } from '../redux/cart/reducer';
const OrderPage = () => {
    const dispatch = useDispatch();
    
    const products = useSelector(state => state.cart.itemsInCart)

    const totalPrice = products.reduce((acc, product) => acc += product.price, 0);

    return (

        <div>
            {products.length <= 0 ? <h1 style={{textAlign:"center"}}>Самое время заказать что нибудь!</h1> :
                <div>
                    <h1>Your Order:</h1>
                    {products.map(product => <div key={product.id} className='productInCart-block'>
                        <div className='productInCart-information'>
                            <img src={product.img} alt="" width={100} />
                            <div>
                                <h2 className='productInCart-name'>{product.name}</h2>
                                <h3 className='productInCart-price'>{product.price}$</h3>
                            </div>
                        </div>                 
                        <div><img onClick={() => dispatch(deleteItemFromCart(product.id))} className='deleteProduct-icon' src={deleteBin} alt="" /></div>
                    </div>
                    )}
                    <div className='orderPage-totalPrice'>{products.length} товаров на сумму {totalPrice} $</div>
                </div>

            }
        </div>

    )
}

export default OrderPage