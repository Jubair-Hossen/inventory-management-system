import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className='banner-container'>
            <div className='top-banner'>
                <img src="https://i.ibb.co/BVBMK00/banner.png" alt="" />
                <div className="banner-text">
                    <h1>Radon Manager</h1>
                    <h3>An Inventory Management Application</h3>
                    <p>Manage your inventory easily with "Radon Manager". <br /> It is totally free.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;