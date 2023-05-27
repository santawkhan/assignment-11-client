import React, { useEffect, useState } from 'react';
import Toys from './Toys';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        document.title = 'Doll House | All Toys'
    }, []);
    useEffect(() => {
        fetch('https://doll-house-server-smoky.vercel.app/addedToy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
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
                        {
                            allToys.map(allToy => <Toys key={allToy._id} allToy={allToy}></Toys>)
                        }

                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default AllToys;