import React from 'react';
import './content.css';
import TrendingToday from './trending-today/trendingToday';
import MainBar from './main-bar/mainBar';
import SideBar from './side-bar/sideBar';

const Content = () => {
    return <div className="content">
        <TrendingToday />
        <div className="bars-wrapper">
            <span className="popular-posts-title">Popular posts</span>
            <div className="bars-wrapper inside">
                <MainBar />
                <SideBar />
            </div>
        </div>
    </div>
}

export default Content;