import React from 'react';
import Banner from '../Banner.js/Banner';
import Featured from '../Featured/Featured';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';
import Parking from '../Parking/Parking';
import Slide from '../Slide/Slide';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            
            <Features></Features>
            
            <Parking></Parking>
            <Slide></Slide>
        </div>
    );
};

export default Home;