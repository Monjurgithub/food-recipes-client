import React from 'react';
import Navber from '../sheared/Navber';
import Footer from '../sheared/Footer';
import Banner from '../sheared/Banner';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='my-container'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;