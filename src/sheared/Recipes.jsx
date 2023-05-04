import React from 'react';
import SingleChefCard from './SingleChefCard';
import RecipesCard from './RecipesCard';

const Recipes = ({ m }) => {
    const { id, picture, name,
        years_of_experience,
        num_recipes,
        likes,
        despriction, recipes } = m;

    return (
        <div>
            <div>
                <div className="hero min-h-50%" style={{
                    backgroundImage: `url(${picture})`, backgroundSize: 'contain',
                    backgroundPosition: "top",
                    background: 'cover', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                            <p className="mb-5 text-3xl font-bold">{despriction}</p>
                            <div className='flex'>
                            <p className="mb-5 text-2xl font-bold mr-3">years_of_experience: {years_of_experience}</p>
                            <p className="mb-5 text-2xl font-bold">num_recipes: {num_recipes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mb-8 mt-6">
                <h4 className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Chefs Recipes</h4>
            </div>
            <div className='grid gap-4 mt-8 mb-4 md:grid-cols-3 lg:grid-cols-3'>
                {
                  recipes.map(m=><RecipesCard m={m}></RecipesCard>)  
                }
            </div>
        </div>
    );
};

export default Recipes;