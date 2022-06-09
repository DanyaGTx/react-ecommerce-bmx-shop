import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../context';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../redux/auth/userSlice';

const CabinetPopUp = () => {
  const {isOpenCabinet,setIsOpenCabinet}= useContext(AuthContext);
  const dispatch = useDispatch();
  const Logout = () =>{
    setIsOpenCabinet(false);
    dispatch(removeUser());
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
  const isLogin = localStorage.getItem('email'); //Проверка, есть ли ключ email в LocalStorage, если да, то показываем попап залогиненого человека
  return (
    <div>
      {isLogin ? 
      <div>
        <div className='cabinet-popUp__link__block' onClick={() => setIsOpenCabinet(false)}><Link className='cabinet-popUp__link' to='/cabinet'>MyAccount</Link></div> 
        <div className='cabinet-popUp__link__block' onClick={Logout}><Link className='cabinet-popUp__link' to='/cabinet'>Exit</Link></div> 
      </div>
      : 
      <div>
        <div className='cabinet-popUp__link__block' onClick={() => setIsOpenCabinet(false)}><Link className='cabinet-popUp__link' to='/login'>Login</Link></div>
        <div className='cabinet-popUp__link__block' onClick={() => setIsOpenCabinet(false)}><Link className='cabinet-popUp__link' to='/registration'>Create account</Link></div>
      </div>
      }
    </div>
  )
}

export default CabinetPopUp