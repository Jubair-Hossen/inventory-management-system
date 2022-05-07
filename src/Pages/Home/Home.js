import React from 'react';
import Items from './Items/Items';
import Newsletter from './Newsletter/Newsletter';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <TopBanner></TopBanner>
            <Items></Items>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;