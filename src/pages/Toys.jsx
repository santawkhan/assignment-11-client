/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ allToy }) => {
    const { _id, name, SellerName, SubCategory, price, AvailableQuantity } = allToy
    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td> {SellerName} </td>
            <td>{SubCategory} </td>
            <td> {price} </td>
            <td> {AvailableQuantity} </td>
            <td><Link to={`/details/${_id}`}><button className='btn btn-success'>View Details</button></Link></td>

        </tr>
    );
};

export default Toys;

// Seller: (if available) show the name of the person who posted the toy
// Toy Name
// Sub-category
// Price
// Available Quantity