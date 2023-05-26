/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const update = useLoaderData()
    const { _id, email, name, SellerName, SubCategory, price, ratings, AvailableQuantity, Description, pictureUrl } = update;
    const handleUpdateToy = event => {
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

        const UpdatedToy = {
            email, name, SellerName, SubCategory, price, ratings, AvailableQuantity, Description, pictureUrl
        }
        console.log(UpdatedToy);

        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Success!',
                        'Data has been updated',
                        'success'
                    )
                }

            })


    }
    return (
        <div>

            <form onSubmit={handleUpdateToy} >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller' defaultValue={SellerName} className="input input-bordered" />
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
                        <input type="text" name='subCategory' defaultValue={SubCategory} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='ratings' defaultValue={ratings} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' defaultValue={AvailableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name='detailDescription' defaultValue={Description} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name='pictureUrl' defaultValue={pictureUrl} className="input input-bordered" />

                    </div>


                </div>


                <div className="form-control  mt-6">

                    <input className='btn btn-secondary w-60 mx-auto mb-7' type="submit" value="Update Toy" />
                </div>
            </form>


        </div>
    );
};

export default UpdateToy;