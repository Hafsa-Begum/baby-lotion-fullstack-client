import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;