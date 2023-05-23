import { useLoaderData } from "react-router-dom";

const DollsDetailsOne = () => {
    const details = useLoaderData();
    const { picture_1, toy_name_1, seller, seller_email, price_1, available_quantity_1, detail_description_1 } = details
    return (
        <div className="mt-28 ml-80">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture_1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {toy_name_1}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Seller Name:{seller}</p>
                    <p>Email:{seller_email} </p>
                    <p>Price:{price_1}Taka</p>
                    <p><div className="rating w-14">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></p>

                </div>
            </div>
        </div>
    );
};

export default DollsDetailsOne;
// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description//