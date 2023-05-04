import React from 'react';
import Banner from '../sheared/Banner';
import ChefsCard from '../sheared/ChefsCard';
import Contact from '../sheared/Contact';
import Statices from '../sheared/Statices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsCard></ChefsCard>
            <Contact></Contact>
            <Statices></Statices>
        </div>
    );
};

export default Home;