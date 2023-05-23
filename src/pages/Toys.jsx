/* eslint-disable no-unused-vars */
import React from 'react';

const Toys = ({ allToy }) => {
    const { name, SellerName, SubCategory, price, AvailableQuantity } = allToy
    return (
        <div className='mt-7'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th></th>
                            <td>{name}</td>
                            <td> {SellerName} </td>
                            <td>{SubCategory} </td>
                            <td> {price} </td>
                            <td> {AvailableQuantity} </td>
                            <td><button className='btn btn-success'>View Details</button></td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Toys;

// Seller: (if available) show the name of the person who posted the toy
// Toy Name
// Sub-category
// Price
// Available Quantity