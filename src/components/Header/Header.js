import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <p>Connecting with people lets you see updates and keep in touch</p>
        </div>
    );
};

export default Header;