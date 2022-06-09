import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { removeUser, setUser } from '../../redux/auth/userSlice'
import Form from './Form'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const auth = getAuth();
 
  useEffect(() => {
    console.log(localStorage)
    if(localStorage.getItem('email')){
      let userEmail = localStorage.getItem('email');
      let userPass = localStorage.getItem('password')
      console.log(userEmail,userPass);
      signInWithEmailAndPassword(auth,userEmail,userPass)
      .then(({user}) => {
        dispatch(setUser({
          email:userEmail,
          id: user.uid,
          token: user.accessToken,
        }))
      })
      navigate('/cabinet');
    }else{
     dispatch(removeUser())
    }
  },[])

  const handleLogin = (email,password) =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
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
    })
    .catch(() => alert("Incorrect Email or Password"));
  }
  

  return (
    <div>
        <h1 style={{marginBottom: "20px"}}>Login</h1>
        <Form title="Sign In" handleClick={handleLogin}/>
    </div>
    
  )
}

export default LoginPage;