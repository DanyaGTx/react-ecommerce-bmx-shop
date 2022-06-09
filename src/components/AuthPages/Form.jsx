import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeUser, setUser } from '../../redux/auth/userSlice';

const Form = ({title,handleClick}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   


  return (
    <div>
      <div>
        <input className='input__user-data' type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
      </div>
      <div>
        <input className='input__user-data' type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
      </div>
        
        <button className='button__user-submit' onClick={() => handleClick(email,password)}>{title}</button>
    </div>
  )
}

export default Form