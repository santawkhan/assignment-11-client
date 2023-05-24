import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/addedToy/${id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));

    }, []);
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={details.pictureUrl
                        } className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl  text-black font-bold">{details.name}</h1>
                            <p className="py-6 font-semibold text-black">{details.Description
                            }</p>
                            <p className=" font-semibold text-black">Seller Name:{details.SellerName}</p>
                            <p className=" font-semibold text-black">Email:{details.email}</p>
                            <p className=" font-semibold text-black">Price:{details.price}</p>
                            <p className=" font-semibold text-black">Available Quentity:{details.AvailableQuantity}</p>
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
        </div>
    );
};

export default ViewDetails;