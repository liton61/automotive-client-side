import { useLoaderData } from "react-router-dom";
import HondaCard from "../HondaCard/HondaCard";
import honda1 from '../../assets/honda-01.webp';
import honda2 from '../../assets/honda-02.webp';
import honda3 from '../../assets/honda-03.webp';
import honda4 from '../../assets/honda-04.webp';


const Honda = () => {
    const loadHonda = useLoaderData();

    const filterCriteria = "HONDA";

    const filteredCars = loadHonda.filter(car => car.brand === filterCriteria);

    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={honda1} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={honda2} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={honda3} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={honda4} className="w-full h-screen" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our HONDA Collection</h1>
                <hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredCars.map(honda => <HondaCard key={honda._id} honda={honda}></HondaCard>)
                }
            </div>
        </div>
    );
};

export default Honda;