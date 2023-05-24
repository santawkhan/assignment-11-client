/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DollDetailsTwo = () => {
    const [dollData, setDollData] = useState({});
    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
            .then((res) => res.json())
            .then((data) => setDollData(data));

    }, []);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={dollData.picture_2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl  text-black font-bold">{dollData.toy_name_2}</h1>
                        <p className="py-6 font-semibold text-black">{dollData.detail_description_2}</p>
                        <p className=" font-semibold text-black">Seller Name:{dollData.seller}</p>
                        <p className=" font-semibold text-black">Email:{dollData.seller_email}</p>
                        <p className=" font-semibold text-black">Price:{dollData.price_2}</p>
                        <p className=" font-semibold text-black">Available Quentity:{dollData.available_quantity_2}</p>
                        <p><div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DollDetailsTwo;


// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)