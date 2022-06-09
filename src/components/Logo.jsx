import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo-block'>
                <img className='logo-img' src={logo} alt="" />
                <div className='logo-text-block'>
                    <span className='logo-text'>Bmx Store</span>
                    <p>The best store for you!</p>
                </div>
            </div>
        </div>
    )
}

export default Logo