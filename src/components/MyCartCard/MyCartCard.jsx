/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCartCard = ({ car, cars, setCars }) => {
    const { _id, image, model, brand, type, price, rating, description } = car;
    const handleDelete = id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your car has been deleted.',
                                'success'
                            )
                            const remaining = cars.filter(ca => ca._id !== _id);
                            setCars(remaining)
                        }
                    })
            }
        })
    }
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
                            <button onClick={() => handleDelete(_id)} className="btn btn-neutral">Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;