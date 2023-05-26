import React from 'react';
import { Link } from 'react-router-dom';

const PopularSection = () => {
    return (
        <div className='mt-16 ' >        <hr />
            <h3 className='text-center  font-serif font-bold text-red-300 text-6xl'>Popular Products</h3>
            <p className='text-center mt-3 mb-9  font-bold text-red-300 text-2xl'>Shoppers like you are looking at these Products. Let’s take a look!</p>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4 '>
                <div className="card w-96 bg-base-100  shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/157668645/photo/hand-made-doll-isolated.jpg?s=612x612&w=0&k=20&c=MQDXxAnzqsGA6nOKdJ6v_xHOkj7CSRAQZO2w1FoQHEY=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Hand made Doll
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'> Those are made from all sorts of materials: cotton, wool, linen, muslin, yarn. They can be sewn or knitted</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/1137380717/photo/pinky-plushie-doll-isolated-on-white-background-with-shadow-reflection-nice-contemporary-rag.jpg?s=612x612&w=0&k=20&c=FOWw89AKj7v6aLM4rD3oH9uqCdlX9a4TdgiSS13rtP8=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Pinkey Doll
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Lifelike realistic baby doll is made of silicone vinyl only. Conforms to the safety requirements of ASTM F963 and EN71 for ages 3+ kids.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/157505066/photo/teddy-bear.jpg?s=612x612&w=0&k=20&c=Hv3PQLQGIibKu1StNS2S1ltwpWZS3t4YcrizQTIlJqM=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Teddy Bear
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>This adorable plush toy features surface-washable construction for easy cleaning and is made from a soft, premium material </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/1130858894/photo/adorable-cute-little-toddler-girl-playing-with-doll-happy-healthy-baby-child-having-fun-with.jpg?s=612x612&w=0&k=20&c=TS94E_HkXtOhqTIhrWQ8Zu5_rJJiKa7YcZjJCCWvNq8=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Adorable Doll
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>Impress new parents with a baby shower gift that promotes sustainability! These recycled plush pals make perfect gifts for baby boys</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/525900055/photo/toy-teddy-bear-isolated-on-white.jpg?s=612x612&w=0&k=20&c=_OrSfhuv2rERZD0ZfAI_mbV6p4rGMKvzZCbPFmx0-F0=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Teddy Bear
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>This beautiful, sustainably made 13” bear has ultra-soft beige plush and a modern design with a cream-colored bowtie and matching paw pads </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/id/511812166/photo/horror-doll.jpg?s=612x612&w=0&k=20&c=OIPmnt7-_jnhKeIcVVQ3cUAOGJdw9Mdzm62a-4m425M=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">
                            Horror Doll
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold'>From Mezco Toys. LDD Presents The Addams Family - the kookiest family on the block who redefine what it means to be a good neighbor. A good-natured and merry uncle who loves a good bubble bath, Fester likes to create mayhem wherever he goes.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline font-mono"><div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <div className="badge badge-outline font-mono">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className='mt-10'><h3 className='text-center  font-serif font-bold text-red-300 text-6xl'>Read Our Latest Articles</h3>
                <p className='text-center font-bold text-xl mt-5 mb-9 font-mono'>More Articles? <Link to={'/blogs'}><span className="text-blue-500" >Visits our Blog</span ></Link></p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/10/Free-To-Be-Kids-Kind-Like-Daddy-credit-Agnes-Teo-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-amber-500 font-mono">
                                Fashion for Kids: How Soon Is Too Soon?

                            </h2>
                            <p className='font-semibold'>In March, Vogue published an article titled “Do Seoul’s Toddlers Have the World’s Most Stylish Hair?” that featured nine street style photographs of the three-feet.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/10/1148857_658101764200104_1422163820_n-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-amber-500 font-mono">
                                I Want a Peanut Butter and Chocolate Chip Sandwich

                            </h2>
                            <p className='font-semibold'>When I was a kid, I used to go home after school and have some good ol’ fashioned alone time. I’d call mom, let her know I was safe, and then do kid things.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 ">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/09/D2348-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-amber-500 font-mono">
                                These Impressive Kid Fashion Designers Will Blow You Away

                            </h2>
                            <p>If you think your New Year’s resolutions are lofty, we invite you to meet these young fashion designers. Quietly but confidently, several teens and tweens over</p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PopularSection;