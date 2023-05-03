import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

const RecipesCard = ({ m }) => {
    console.log(m);
    const { name, ingredients, cooking_method, rating } = m;
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
                    <Rating>

                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                    </Rating>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;