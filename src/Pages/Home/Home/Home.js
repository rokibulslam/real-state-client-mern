import React from 'react';
import Banner from '../Banner.js/Banner';
import Featured from '../Featured/Featured';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';
import Parking from '../Parking/Parking';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Featured></Featured>
            <Features></Features>
            <Parking></Parking>
        </div>
    );
};

export default Home;