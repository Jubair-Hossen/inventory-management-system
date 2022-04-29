import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='nav-bar'>
                <div className="nav-brand">

                </div>
                <div className="nav-items">
                    <Link to='/'>Home</Link>
                    <Link to='/manage-items'>Manage Items</Link>
                    <Link to='/add-items'>Add Items</Link>
                    <Link to='/my-items'>My Items</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;