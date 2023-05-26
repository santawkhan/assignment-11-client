import React from 'react';
import error from '../assets/images/CodePen-404-Page.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src={error} alt="" />
            <Link to={'/'}><h3 className='text-center font-serif font-bold text-4xl mb-20'>Back to <span className='text-blue-700'>Home</span></h3></Link>
        </div>
    );
};

export default Error;