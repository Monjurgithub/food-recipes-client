import React, { useEffect, useState } from 'react';
import SingleChefCard from './SingleChefCard';

const ChefsCard = () => {
    const [chefs, setchefs] = useState([])

    useEffect(() => {
        fetch("https://food-fun-server-monjurgithub.vercel.app/chefs")
            .then(res => res.json())
            .then(data => setchefs(data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div className='my-container'>
            <div class="flex items-center justify-center mb-8">
                <h4 className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Chefs Section</h4>
            </div>
            <div className='grid gap-4 mb-4 md:grid-cols-3 lg:grid-cols-3'>
                {
                    chefs.map(c => <SingleChefCard
                        key={c.years_of_experience} c={c}></SingleChefCard>)
                }
            </div>

        </div>
    );
};

export default ChefsCard;