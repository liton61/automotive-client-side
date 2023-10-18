import { useLoaderData } from "react-router-dom";
import BmwCard from "../BmwCard/BmwCard";
import bmw1 from '../../assets/bmw-01.jpg';
import bmw2 from '../../assets/bmw-02.jpg';
import bmw3 from '../../assets/bmw-03.jpg';
import bmw4 from '../../assets/bmw-04.jpg';

const Bmw = () => {
    const loadCar = useLoaderData();

    // Define the filter criteria here
    const filterCriteria = "BMW Series 5"; // For example, filtering by product name

    // Filter the data based on the criteria
    const filteredCars = loadCar.filter(car => car.name === filterCriteria);

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bmw1} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bmw2} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bmw3} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bmw4} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our BMW Collection</h1><hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    // Map and render the filtered data
                    filteredCars.map(car => <BmwCard key={car._id} car={car}></BmwCard>)
                }
            </div>
        </div>
    );
};

export default Bmw;
