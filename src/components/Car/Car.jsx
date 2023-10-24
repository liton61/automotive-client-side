import { useLoaderData } from "react-router-dom";
import GetCarCard from "../GetCarCard/GetCarCard";
import Slider from "../Slider/Slider";


const Car = () => {
    const loadCar = useLoaderData();
    console.log(loadCar);
    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    loadCar.map((car) => <GetCarCard key={car._id} car={car}></GetCarCard>)
                }
            </div>
        </div>
    );
};

export default Car;