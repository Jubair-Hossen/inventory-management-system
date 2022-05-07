import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    const toogle = (e) => {
        setIsOpen(!isOpen);
    }
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <nav className='nav-bar'>
                <div className="nav-brand">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <div className={`nav-items ${isOpen ? 'show' : 'hide'}`}>
                    <Link to='/' onClick={toogle}>Home</Link>
                    <Link to='/blogs' onClick={toogle}>Blogs</Link>
                    {
                        user ? <>
                            <Link to='/manage-items' onClick={toogle}>Manage Items</Link>
                            <Link to='/add-items' onClick={toogle}>Add Items</Link>
                            <Link to='/my-items' onClick={toogle}>My Items</Link>
                            <Link to='' onClick={handleLogOut}>Log Out</Link>
                        </>
                            :
                            <Link to='/login' onClick={toogle}>Login</Link>
                    }
                </div>
                <FontAwesomeIcon onClick={toogle} className='menu-icon' icon={faBars} />
            </nav>
        </header>
    );
};

export default Header;