import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavBar from './NavBar';
import { AuthContext } from '../context';

const Header = () => {
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenCabinet, setIsOpenCabinet] = useState(false);
  return (
    <header className='header'>
      <div className='upper-header'>
        <Link className='link' to='/'><Logo /></Link>
        <AuthContext.Provider value={{
          isOpenCart,
          setOpenCart,
          isOpenCabinet,
          setIsOpenCabinet
        }}>
          <NavBar />
        </AuthContext.Provider>
      </div>

    </header>
  )
}

export default Header;