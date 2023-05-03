import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../sheared/Recipes';

const ChefDetails = (props) => {
    // const [recipes, setRecipes] = useState(null)
    const allRecipes = useLoaderData()
    
    return (
        <div>
            {
                allRecipes.map(m=><Recipes key={m.id} m={m}></Recipes>)
            }
        </div>
    );
};

export default ChefDetails;