import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import deleteBin from '../img/delete-bin.png'
import { deleteItemFromCart } from '../redux/cart/reducer';
import { useNavigate } from 'react-router-dom';

const CartProducts = ({setOpenCart, bikeItems }) => {
  const navigate = useNavigate();
  
  // Цена
  const totalPrice = bikeItems.reduce((acc, bike) => acc += bike.price, 0);
  
  const dispatch = useDispatch();


  const goOrder = (event) => 
  {
    event.preventDefault();
    setOpenCart(false);//закрытие корзины по перехожу на страницу заказа
    navigate('/order');
  }
  return (
    <div>
      {bikeItems.map(bike =><div key={bike.id} className='productInCart-block'>
        <div className='productInCart-information'>
          <img src={bike.img} alt="" width={100}/> 
          <div> 
            <h2 className='productInCart-name'>{bike.name}</h2>
            <h3 className='productInCart-price'>{bike.price}$</h3>
          </div>
           
        </div>
        <div ><img onClick={() => dispatch(deleteItemFromCart(bike.id))} className='deleteProduct-icon' src={deleteBin} alt="" /></div>  
        </div>
        )}
      {bikeItems.length > 0 ?
        <div>
          
          <h2>Total Price: {totalPrice}</h2>
          <button className='orderButton' onClick={goOrder}>Оформить заказ</button>
        </div>
        : <h2>Коризна пуста!</h2>}

    </div>
  )
}

export default CartProducts;