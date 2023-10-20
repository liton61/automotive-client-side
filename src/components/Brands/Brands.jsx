import { useLoaderData } from "react-router-dom";
import BrandsCard from "../BrandsCard/BrandsCard";


const Brands = () => {
    const loadBrans = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-10 mb-2">Our All Brand Collections</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mb-10">
                {
                    loadBrans.map(brands => <BrandsCard key={brands.id} brands={brands}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;