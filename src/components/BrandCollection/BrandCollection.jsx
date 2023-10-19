import { Link } from 'react-router-dom';
import brand1 from '../../assets/bmw.jpg';
import brand2 from '../../assets/ford.webp';
import brand3 from '../../assets/honda.jpg';
import brand4 from '../../assets/mercedes.webp';
import brand5 from '../../assets/tesla.webp';
import brand8 from '../../assets/toyota3.jpg';
import './BrandCollection.css';

const BrandCollection = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our Brand Collection</h1><hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card">
                    <div className="image">
                        <img src={brand1} alt="Brand 1" />
                    </div>
                    <div className="overlay">
                        <Link to="/bmw">
                            <button className="btn text-black font-semibold">BMW</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={brand2} alt="Brand 2" />
                    </div>
                    <div className="overlay">
                        <Link to="/ford">
                            <button className="btn text-black font-semibold">FORD</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={brand3} alt="Brand 3" />
                    </div>
                    <div className="overlay">
                        <Link to="/honda">
                            <button className="btn text-black font-semibold">HONDA</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={brand4} alt="Brand 4" />
                    </div>
                    <div className="overlay">
                        <Link to="/mercedes">
                            <button className="btn text-black font-semibold">MERCEDES</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={brand5} alt="Brand 5" />
                    </div>
                    <div className="overlay">
                        <Link to="/tesla">
                            <button className="btn text-black font-semibold">TESLA</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={brand8} alt="Brand 6" />
                    </div>
                    <div className="overlay">
                        <Link to="/toyota">
                            <button className="btn text-black font-semibold">TOYOTA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCollection;