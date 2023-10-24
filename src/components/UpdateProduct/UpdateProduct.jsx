import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const car = useLoaderData();
    const { _id, image, model, brand, type, price, rating, description } = car;
    console.log(type);

    const handleUpdateCar = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateCar = { image, model, brand, type, price, rating, description };
        console.log(updateCar);

        // post method
        fetch(`http://localhost:5000/cars/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateCar),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Car successfully updated !',
                        showConfirmButton: false,
                        timer: 2000
                    })
            });
    }
    return (
        <div className="bg-slate-100 pb-24">
            <h1 className="text-center text-2xl font-bold py-5">Update Car</h1>
            <form onSubmit={handleUpdateCar}>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Image</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="image" defaultValue={image} placeholder="Image" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Model</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="model" defaultValue={model} placeholder="Model" />
                        </label>
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Brand</span>
                        </label>
                        <select id="brand" name="brand" defaultValue={brand} className="p-3 w-full focus:outline-none">
                            <option value="BMW">BMW</option>
                            <option value="Ford">Ford</option>
                            <option value="Honda">Honda</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Toyota">Toyota</option>
                        </select>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Type</span>
                        </label>
                        <select id="type" name="type" defaultValue={type} className="p-3 w-full focus:outline-none">
                            <option value="SUV">SUV</option>
                            <option value="Minivan">Minivan</option>
                            <option value="Cabriolet">Cabriolet</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Estate car">Estate car</option>
                            <option value="Crossover">Crossover</option>
                            <option value="Sedan">Sedan</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Price</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="price" defaultValue={price} placeholder="Price" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Rating</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="rating" defaultValue={rating} placeholder="Rating" />
                        </label>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Description</span>
                        </label>
                        <label>
                            <textarea className="focus:outline-none w-full h-24 p-3" type="text" name="description" defaultValue={description} placeholder="Description" />
                        </label>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <input className="btn btn-neutral w-full mt-5" type="submit" value="Update Car" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;