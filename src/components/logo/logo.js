import React from 'react';
import './logo.css';
import redditLogo from '../../assets/images/reddit-logo.png';

const Logo = () => {
    return (
        <div className="logo hoverable">
            <img src={redditLogo} alt="logo"/>
        </div>
    )
}

export default Logo;