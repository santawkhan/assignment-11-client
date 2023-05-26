import React from 'react';
import { Link } from 'react-router-dom';

const DetailsThree = ({ categoryDoll }) => {
    const { picture_3, toy_name_3, price_3, _id } = categoryDoll
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl " data-aos="zoom-in" data-aos-duration="3000">
                <figure><img src={picture_3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{toy_name_3}</h2>
                    <p className='font-semibold'>Price :{price_3}</p>
                    <p><div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <div className="card-actions ">
                        <Link to={`/dollThree/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsThree;