import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SalesOffer from '../SalesOffer/SalesOffer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <SalesOffer />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;