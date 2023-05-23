import React, { useEffect, useState } from 'react';
import Toys from './Toys';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addedToy')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            {
                allToys.map(allToy => <Toys key={allToy._id} allToy={allToy}></Toys>)
            }
        </div>
    );
};

export default AllToys;