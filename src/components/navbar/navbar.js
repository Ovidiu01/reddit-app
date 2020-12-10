import React from 'react';
import Searchbar from './searchbar/searchbar';
import Logo from '../logo/logo';
import Actions from './actions/actions';
import './navbar.css';

const Navbar = () => {
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Actions/>
    </div>
}

export default Navbar;