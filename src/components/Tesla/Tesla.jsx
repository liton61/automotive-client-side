import { useLoaderData } from "react-router-dom";
import TeslaCard from "../TeslaCard/TeslaCard";
import tesla1 from '../../assets/tesla-01.jpg';
import tesla2 from '../../assets/tesla-02.jpg';
import tesla3 from '../../assets/tesla-03.jpg';
import tesla4 from '../../assets/tesla-04.jpg';


const Tesla = () => {
    const loadTesla = useLoaderData();

    const filterCriteria = "TESLA";

    const filteredCars = loadTesla.filter(car => car.brand === filterCriteria);
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={tesla1} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={tesla2} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={tesla3} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={tesla4} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our TESLA Collection</h1>
                <hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredCars.map(tesla => <TeslaCard key={tesla._id} tesla={tesla}></TeslaCard>)
                }
            </div>
        </div>
    );
};

export default Tesla;