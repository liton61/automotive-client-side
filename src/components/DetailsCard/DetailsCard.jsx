/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const DetailsCard = ({ details }) => {
    const { _id, image, model, brand, type, price, rating, description } = details || {};
    const detail = { image, model, brand, type, price, rating, description };
    const handleAddToCart = () => {

        // post method
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(detail),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Car successfully added !',
                        showConfirmButton: false,
                        timer: 2000
                    })
            });
    }
    return (
        <div>
            <div className="card w-full mx-auto bg-base-100 shadow-xl mb-10 md:w-3/4 lg:w-1/2 ">
                <figure><img className="h-[70vh] w-full" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Brand : {brand}</h2>
                    <h2 className="text-sm font-medium">Model : {model}</h2>
                    <h2 className="text-sm font-medium">Price : {price}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn btn-neutral w-full">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
