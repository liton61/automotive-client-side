import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const carInfo = { image, model, brand, type, price, rating, description };
        console.log(carInfo);

        // post method
        fetch('http://localhost:5000/cars', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(carInfo),
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
        <div className="bg-slate-100 pb-24 dark:bg-zinc-900">
            <h1 className="text-center text-2xl font-bold py-5 dark:text-white">Add Car</h1>
            <form onSubmit={handleAddCar}>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold dark:text-white">Image</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="image" placeholder="Image" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold dark:text-white">Model</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="model" placeholder="Model" />
                        </label>
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold dark:text-white">Brand</span>
                        </label>
                        <select id="type" name="brand" className="p-3 w-full focus:outline-none">
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
                            <span className="label-text text-lg font-semibold dark:text-white">Type</span>
                        </label>
                        <select id="type" name="type" className="p-3 w-full focus:outline-none">
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
                            <span className="label-text text-lg font-semibold dark:text-white">Price</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="price" placeholder="Price" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold dark:text-white">Rating</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="rating" placeholder="Rating" />
                        </label>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold dark:text-white">Description</span>
                        </label>
                        <label>
                            <textarea className="focus:outline-none w-full h-24 p-3" type="text" name="description" placeholder="Description" />
                        </label>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <input className="btn btn-neutral w-full mt-5" type="submit" value="Add Car" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;