import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import Navbar from '../pages/navbar/Navbar';

const Prime = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Prime;