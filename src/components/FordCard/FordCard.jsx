/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const FordCard = ({ car }) => {
    const { image, name, brand, type, price, rating, description } = car;
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Model : {name}
                            <div className="badge bg-yellow-500 text-white">{rating}</div>
                        </h2>
                        <h2 className="text-lg font-semibold">Brand : {brand}</h2>
                        <h2 className="text-lg font-semibold">Type : {type}</h2>
                        <h2 className="text-lg font-semibold">Price : {price}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn">Details</button>
                            <button className="btn">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FordCard;