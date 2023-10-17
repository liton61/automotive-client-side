

const AddProduct = () => {
    return (
        <div className="bg-slate-100 pb-24">
            <h1 className="text-center text-2xl font-bold py-5">Add New Car</h1>
            <form>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Image</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="image" placeholder="Car image" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Name</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="car" placeholder="Car name" />
                        </label>
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Brand Name</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="brand" placeholder="Brand name" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Type</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="type" placeholder="Car type" />
                        </label>
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Price</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="price" placeholder="Car price" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-5 ml-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Rating</span>
                        </label>
                        <label>
                            <input className="focus:outline-none w-full p-3" type="text" name="rating" placeholder="Car rating" />
                        </label>
                    </div>
                </div>
                <div className="w-9/12 mx-auto">
                    <div className="form-control w-full mb-5 mr-3">
                        <label>
                            <span className="label-text text-lg font-semibold">Car Description</span>
                        </label>
                        <label>
                            <textarea className="focus:outline-none w-full h-24 p-3" type="text" name="description" placeholder="Car description" />
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