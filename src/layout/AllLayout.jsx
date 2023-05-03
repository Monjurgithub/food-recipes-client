import React from 'react';
import Navber from '../sheared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../sheared/Footer';

const AllLayout = () => {
    return (
        <div className='my-container'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AllLayout;