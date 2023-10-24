import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";


const Brand = () => {
    const brands = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2 dark:text-white">Our Brands Collection</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">
                {
                    brands.map(singleBrand => <BrandCard key={singleBrand._id} singleBrand={singleBrand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;