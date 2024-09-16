import React, { useState } from 'react';
import './Navbar.css';
import logo from './../../assets/logo.png';
import cart_icon from './../../assets/cart_icon.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState('shop');

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Shop Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li 
                    className={menu === 'shop' ? 'active' : ''} 
                    onClick={() => setMenu('shop')}
                >
                    <Link to="/">Shop</Link>
                </li>
                <li 
                    className={menu === 'mens' ? 'active' : ''} 
                    onClick={() => setMenu('mens')}
                >
                    <Link to="/mens">Mens</Link>
                </li>
                <li 
                    className={menu === 'womens' ? 'active' : ''} 
                    onClick={() => setMenu('womens')}
                >
                    <Link to="/womens">Women</Link>
                </li>
                <li 
                    className={menu === 'kids' ? 'active' : ''} 
                    onClick={() => setMenu('kids')}
                >
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <img src={cart_icon} alt="Cart Icon" />
                <div className="nav-cart-count">0</div>
            </div>
        </nav>
    );
}

export default Navbar;