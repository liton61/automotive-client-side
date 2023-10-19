import { useLoaderData } from "react-router-dom";
import ToyotaCard from "../ToyotaCard/ToyotaCard";
import toyota1 from '../../assets/toyota-01.jpg';
import toyota2 from '../../assets/toyota-02.jpg';
import toyota3 from '../../assets/toyota-03.jpg';
import toyota4 from '../../assets/toyota-04.jpg';


const Toyota = () => {
    const loadToyota = useLoaderData();

    const filterCriteria = "HONDA";

    const filteredCars = loadToyota.filter(car => car.brand === filterCriteria);
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={toyota1} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={toyota2} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={toyota3} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={toyota4} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our TOYOTA Collection</h1>
                <hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredCars.map(toyota => <ToyotaCard key={toyota} toyota={toyota}></ToyotaCard>)
                }
            </div>
        </div>
    );
};

export default Toyota;