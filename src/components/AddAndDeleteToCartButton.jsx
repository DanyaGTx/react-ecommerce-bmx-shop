import React from 'react'
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from './MyButton/MyButton';




const AddAndDeleteToCartButton = ({ bike }) => {
    const dispatch = useDispatch();
    //Добавление товара в корзину и удаление из корзины 
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === bike.id)

    const addToCartAndDelete = (event) => {
        event.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(bike.id))
        } else {
            dispatch(setItemInCart(bike));
        }

    }
    return (
        <MyButton type={isItemInCart ? 'myButton activeInCartButton' : 'myButton '} addToCartAndDelete={addToCartAndDelete}>{isItemInCart ? 'Удалить из корзины' : 'В корзину'}</MyButton>
    )
}

export default AddAndDeleteToCartButton