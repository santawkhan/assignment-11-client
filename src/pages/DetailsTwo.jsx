import React from 'react';
import { Link } from 'react-router-dom';

const DetailsTwo = ({ categoryDoll }) => {

    const { picture_2, toy_name_2, price_2, _id } = categoryDoll
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture_2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name_2}</h2>
                    <p>Price :{price_2}</p>
                    <div className="card-actions ">
                        <Link to={`/dollTwo/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsTwo;