import React, { Component } from 'react';
import './landing.css';
import Navbar from '../navbar/navbar';
import Content from '../content/content';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Content />
            </div>
        )
    }

}

export default Landing;