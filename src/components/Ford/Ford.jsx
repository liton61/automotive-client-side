
import { useLoaderData } from 'react-router-dom';
import FordCard from '../FordCard/FordCard';
import ford1 from '../../assets/ford-01.webp';
import ford2 from '../../assets/ford-02.webp';
import ford3 from '../../assets/ford-03.webp';
import ford4 from '../../assets/ford-04.webp';

const Ford = () => {
    const loadCar = useLoaderData();

    const filterBrand = 'FORD';
    const filteredCars = loadCar.filter(car => car.brand === filterBrand);

    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={ford1} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={ford2} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={ford3} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={ford4} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our   FORD Collection</h1>
                <hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredCars.map(car => <FordCard key={car._id} car={car} />)}
            </div>
        </div>
    );
};

export default Ford;
