import React from 'react';
import { Link } from 'react-router-dom';

const DetailsThree = ({ categoryDoll }) => {
    const { picture_3, toy_name_3, price_3, _id } = categoryDoll
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture_3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name_3}</h2>
                    <p>Price :{price_3}</p>
                    <div className="card-actions ">
                        <Link to={`/dollThree/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsThree;