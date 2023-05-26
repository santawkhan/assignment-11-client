import React from 'react';
import banner from '../assets/images/banner.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import banner4 from '../assets/images/banner.4.jpg';
import gallary1 from '../assets/images/gone.jpg'
import gallary2 from '../assets/images/gtwo.jpg'
import gallary3 from '../assets/images/gthree.jpg'
import gallary4 from '../assets/images/g4.jpg'
import gallary5 from '../assets/images/g5.jpg'
import gallary6 from '../assets/images/gsix.jpg'



const Header = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner3} className="w-full rounded h-screen" />
                    <div className="absolute  transform -translate-y-1/2 left-10 mt-4 right-5 top-1/2  " data-aos="fade-up"
                        data-aos-duration="3000">
                        <h3 className='text-6xl text-blue-800 font-bold font-serif'>Collect Your Desired <br /> Doll For Your Child</h3>
                        <p className='text-4xl text-blue-800 font-medium'>Join our community to find <br /> your rare items,and play aroun here.</p>
                        <button className="btn btn-outline btn-primary mt-4">Discover Now</button>
                    </div>
                </div>

            </div>
            <div><div className='text-center text-red-300 text-6xl mt-8 font-serif' data-aos="fade-up"
                data-aos-duration="8000">Our Dolls Gallery</div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-7'>
                    <div className="card w-96 bg-base-100 shadow-xl  " data-aos="fade-up"
                        data-aos-duration="8000">
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
                        data-aos-duration="8000">
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
                        data-aos-duration="8000">
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
                        data-aos-duration="8000" >
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary4} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
                        data-aos-duration="8000">
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary5} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up"
                        data-aos-duration="8000">
                        {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div> */}
                        <figure><img src={gallary6} alt="Shoes" /></figure>
                    </div></div>

            </div >
        </div >
    )

};

export default Header;