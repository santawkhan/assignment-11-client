/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ToysRow from './ToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/toy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, []);


    const handleDelete = id => {
        const proceed = confirm('Are You Sure To Delete')

        if (proceed) {
            fetch(`http://localhost:5000/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }

                })
        }
    }
    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Seller Name & Email</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            myToys.map(myToy => <ToysRow key={myToy._id} myToy={myToy} handleDelete={handleDelete} ></ToysRow>)
                        }



                    </tbody>


                </table>
            </div>




        </div >
    );
};

export default MyToys;



