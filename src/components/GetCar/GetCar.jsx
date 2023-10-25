import { useEffect, useState } from "react";
import GetCarCard from "../GetCarCard/GetCarCard";
import Slider from "../Slider/Slider";


const GetCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2 dark:text-white">Choose Your Favorite Car</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    cars.map(car => <GetCarCard key={car._id} car={car}></GetCarCard>)
                }
            </div>
        </div>
    );
};

export default GetCar;