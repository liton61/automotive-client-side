/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BrandsCard = ({ brands }) => {
    const { id, button, img } = brands;
    return (
        <div>
            <div className="w-full relative group">
                <img src={img} alt="Card Image" className="w-full h-[40vh] rounded" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black bg-opacity-70 text-white flex items-center justify-center transition duration-100">
                    <Link to={`/brands/${id}`}>
                        <button className="btn font-bold">{button}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandsCard;