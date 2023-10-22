/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const GetCarCard = ({ car }) => {
    const { _id,image, model, brand, type, price, rating, description } = car;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-10">
                <figure><img className="h-[40vh] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Brand : {brand}
                        <div className="badge badge-warning text-white">{rating}</div>
                    </h2>
                    <h2>Model : {model}</h2>
                    <h2>Price : {price}</h2>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${_id}`}>
                       <button className="btn btn-neutral">Details</button>
                       </Link>
                       <Link to="/updateProduct">
                       <button className="btn btn-neutral">Update</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetCarCard;