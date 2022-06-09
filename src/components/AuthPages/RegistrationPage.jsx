import React from 'react'
import { useDispatch } from 'react-redux'
import{getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Form from './Form'
import { setUser } from '../../redux/auth/userSlice';
import { useNavigate } from 'react-router-dom';
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email,password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then(({user}) => {
      dispatch(setUser({
        email:user.email,
        id: user.uid,
        token: user.accessToken,
      }))
      // Сохранение данных о пользователе в localStorage
      localStorage.setItem('email',email);
      localStorage.setItem('password',password);
      navigate('/cabinet');
    }).catch(() => alert("Invalid Registr Email or Password"));
  }
  

  return (
    <div>
      <h1 style={{marginBottom: "20px"}}>Registration</h1>
      <Form title="Create New Account" handleClick={handleRegister}/>
    </div>
    
  )
}

export default RegistrationPage;