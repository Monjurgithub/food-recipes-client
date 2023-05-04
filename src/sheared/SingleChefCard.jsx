import React from 'react';
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const SingleChefCard = (props) => {
    const {id, picture, name, years_of_experience, num_recipes, likes} =   props.c;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <LazyLoad><img className='w-full h-56 md:h-64 xl:h-80' src={picture} alt="" /></LazyLoad>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                    <p>number of experience: {years_of_experience}</p>
                    <p>number of : num_recipes{num_recipes}</p>
                    </div>
                    <div className=" flex inline-flex card-actions justify-end">
                        <p className='flex'><HiHandThumbUp className='me-2'></HiHandThumbUp> {likes}</p>
                        <Link to={`/chefs/${id}`}><button className="btn btn-primary">View Recipes Button</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChefCard;