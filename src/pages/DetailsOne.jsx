import React from 'react';
import { Link } from 'react-router-dom';

const DetailsOne = ({ categoryDoll }) => {
    const { picture_1, toy_name_1, price_1, _id } = categoryDoll
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture_1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name_1}</h2>
                    <p>Price :{price_1}</p>
                    <div className="card-actions ">
                        <Link to={`/dollOne/${_id}`} ><button className="btn btn-primary">View Details</button ></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DetailsOne;