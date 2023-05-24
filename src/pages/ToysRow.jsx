import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ myToy, handleDelete }) => {
    const { _id, email, name, SellerName, SubCategory, price, AvailableQuantity, Description, pictureUrl } = myToy;



    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{SubCategory}</div>
                        <div className="text-sm opacity-50"><div className="rating w-16">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div></div>
                    </div>
                </div>
            </td>
            <td>
                <p>{email}</p>
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td><p>{SellerName}</p> </td>
            <td><p>{AvailableQuantity} </p> </td>
            <th>
                <Link to={`/updateToy/${_id}`}> <button className='btn btn-secondary'>Update</button></Link>
            </th>
        </tr>

    );
};

export default ToysRow;