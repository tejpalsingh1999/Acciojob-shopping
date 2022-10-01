import React from 'react';
import Navbar from '../UI/Navbar';
import Main from '../UI/Main';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Navbar />
            <Main />
        </div>
    );
}

export default Header;