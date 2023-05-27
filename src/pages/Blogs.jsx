import React, { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
        document.title = 'Doll House | Blogs'
    }, []);
    return (
        <div className='w-1/2 mx-auto mb-10 mt-6 bg-amber-100 p-5 rounded'>
            <h4 className='font-bold font-serif text-2xl' data-aos="fade-right">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
            <p className='font-bold text-xl text-blue-500' data-aos="fade-left">An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user's device. Plenty of websites use access tokens.The authentication server sends the access token and the refresh token to the client. The client stores the tokens in local storage or as a HTTP-only and secure cookie. The client sends the access token with each request to access protected resources.</p>
            <h4 className='font-bold font-serif text-2xl' data-aos="fade-right">2.Compare SQL and NoSQL databases?</h4>
            <p className='font-bold  text-xl text-blue-500 '>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h4 className='font-bold font-serif text-2xl' data-aos="fade-left">3.What is express js? What is Nest JS ?</h4>
            <p className='font-bold  text-xl text-blue-500 ' data-aos="fade-right">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
            <h4 className='font-bold font-serif text-2xl' data-aos="fade-left">4.What is MongoDB aggregate and how does it work ??</h4>
            <p className='font-bold  text-xl text-blue-500 ' data-aos="fade-right">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>
        </div>
    );
};

export default Blogs;