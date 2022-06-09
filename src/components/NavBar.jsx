import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabinet from './Cabinet'
import Cart from './Cart';
const NavBar = () => {
    
    return (
        <div className='navbar'>
            <nav className='navigation'>
            <ul className='navigation-list'>
                <Link className='link header-link' to='/'><li className='navigation-item'>Main</li></Link>
                <Link className='link header-link' to='/bikes'><li className='navigation-item'>Bikes</li></Link>
                <Link className='link header-link' to='/about'><li className='navigation-item'>About</li></Link>
                <Link className='link header-link' to='/contacts'><li className='navigation-item'>Contacts</li></Link>
                <span  className='link header-link' to=''><Cart /></span>
                <span className='link header-link' to=''><Cabinet /></span>
            </ul>
        </nav>
        </div>
        
    )
}

export default NavBar