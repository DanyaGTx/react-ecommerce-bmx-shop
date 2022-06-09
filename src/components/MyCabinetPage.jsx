import React, { useEffect } from 'react'
import { useAuth } from '../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../redux/auth/userSlice';
import { useDispatch } from 'react-redux';
import LoginPage from './AuthPages/LoginPage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const MyCabinetPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = getAuth();
    
    const { isAuth, email } = useAuth();
    console.log(localStorage)
    
    const Logout = () =>{
        dispatch(removeUser());
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }


    return isAuth ? (
        <div>
            <h1>Hello {email}</h1>
            <button className='logout__button' onClick={Logout}>Log out</button>
        </div>
    ) : (
        <LoginPage />
    )
}
