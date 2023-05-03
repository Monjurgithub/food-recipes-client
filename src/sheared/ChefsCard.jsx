import React, { useEffect, useState } from 'react';
import SingleChefCard from './SingleChefCard';

const ChefsCard = () => {
    const [chefs, setchefs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then(res => res.json())
            .then(data => setchefs(data))
            .catch(error => console.log(error))
    }, [])
    console.log(chefs);
    return (
        <div className='my-container'>
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