/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const MyCartCard = ({ car }) => {
    const { _id, image, model, brand, type, price, rating, description } = car;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-10 md:w-80 lg:w-96">
                <figure><img className="h-[40vh] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Brand : {brand}
                        <div className="badge badge-warning text-white">{rating}</div>
                    </h2>
                    <h2>Model : {model}</h2>
                    <h2>Price : {price}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/myCart/${_id}`}>
                            <button className="btn btn-neutral">Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;