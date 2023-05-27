/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const SellerName = form.seller.value;
        const SubCategory = form.subCategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const AvailableQuantity = form.availableQuantity.value;
        const Description = form.detailDescription.value;
        const pictureUrl = form.pictureUrl.value;
        form.reset();

        const addToy = {
            name, email, SellerName, SubCategory, price, ratings, AvailableQuantity, Description, pictureUrl
        }
        console.log(addToy);

        fetch('https://doll-house-server-smoky.vercel.app/addedToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'WOW!',
                        'Your data has been added.',
                        'success'
                    )
                }
            })


    }
    return (
        <div>

            <form onSubmit={handleAddToy} >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name='subCategory' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='ratings' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name='detailDescription' className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name='pictureUrl' className="input input-bordered" />

                    </div>


                </div>


                <div className="form-control mt-6">

                    <input className='btn btn-secondary w-60 mx-auto mb-10' type="submit" value="Add Toy" />
                </div>
            </form>


        </div>
    );
};

export default AddToys;

// Picture URL of the toy,
// Name,
// seller name (if available from the logged in user)
// seller email (info from the logged in user)
// Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
// Price,
// Rating,
// Available quantity
// Detail description