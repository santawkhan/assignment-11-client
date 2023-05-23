/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DollDetailsTwo = () => {
    const [dollData, setDollData] = useState({});
    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
            .then((res) => res.json())
            .then((data) => setDollData(data));

    }, []);
    return (
        <div>
            <h2>{dollData?.price_1}</h2>
        </div>
    );
};

export default DollDetailsTwo;