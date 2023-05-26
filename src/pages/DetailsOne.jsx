import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DetailsOne = ({ categoryDoll }) => {
    const { picture_1, toy_name_1, price_1, _id } = categoryDoll;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture_1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{toy_name_1}</h2>
                    <p className='font-semibold'>Price :{price_1}</p>
                    <p><div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>
                    <div className="card-actions ">
                        <Link to={`/dollOne/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOne;
