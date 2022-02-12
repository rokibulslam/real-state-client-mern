import React from 'react';
import Banner from '../Banner.js/Banner';
import Featured from '../Featured/Featured';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Parking from '../Parking/Parking';
import Reviews from '../Reviews/Reviews';
import Slide from '../Slide/Slide';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            
            <Features></Features>
            
            <Parking></Parking>
            <Slide></Slide>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;