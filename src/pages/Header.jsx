import React from 'react';
import banner from '../assets/images/banner.jpg'

const Header = () => {
    return (
        <div className='mt-3'><div className="carousel w-full">
            <div id="item1" className="carousel-item w-full relative">
                <img src={banner} className="w-full " />

                <div className="absolute  transform  left-5 right-5 top-1/2">
                    <h3 className='text-3xl font-bold font-mono text-white'>Pick the Best Toy For Your Kid</h3>
                    <p className='text-xl text-cyan-500'>We Offer a premium service,whether <br /> you are shopping at our flagship storesor our website</p>
                    <div className="form-control w-36 mt-4 flex flex-row gap-3">
                        <div> <input type="text" placeholder="Search" className="input input-bordered" /></div>
                        <button className="btn btn-outline btn-primary ">Search</button>
                    </div>
                </div>


            </div>
            <div id="item2" className="carousel-item w-full">
                <img src={banner} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src={banner} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src={banner} className="w-full e" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>
        </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div></div>
    );
};

export default Header;