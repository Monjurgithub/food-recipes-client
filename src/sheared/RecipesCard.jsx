import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';

const RecipesCard = ({ m }) => {
    const { name, ingredients, cooking_method, rating } = m;
    const [isclicked, setIsclicked] = useState(false)

    const handleClick = () => {
        setIsclicked(true)
        if (true) {
            toast.success("You clicked on the recipe")
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>

                        {
                            ingredients.map(i => <p>{i}</p>)
                        }

                    </div>
                    <p>{cooking_method}</p>


                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly />


                    <div className="card-actions justify-end">
                        <button onClick={handleClick} disabled={isclicked}>
                            {isclicked ? <HiHeart></HiHeart> : <HiOutlineHeart></HiOutlineHeart>}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipesCard;