/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './BrandCard.css'


const BrandsCard = ({ brands }) => {
    const { id, button, img } = brands;
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={img} alt="Brand 1" />
                </div>
                <div className="overlay">
                    <button className="btn">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default BrandsCard;