/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandCard = ({ singleBrand }) => {
    const { brand, img } = singleBrand;
    return (
        <div>
            <div className="w-48 md:w-48 lg:w-64 mb-10 mx-auto">
                <Link to={`/car/${brand}`}>
                    <img className="h-[40vh] w-full rounded-full cursor-pointer" src={img} alt="" />
                </Link>
                <div className="bg-red-200 mt-2 rounded-lg">
                    <h2 className="text-lg font-semibold text-center">{brand}</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;