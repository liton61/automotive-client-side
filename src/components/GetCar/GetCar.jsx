import { useEffect, useState } from "react";
import GetCarCard from "../GetCarCard/GetCarCard";


const GetCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2">Our All Car Collection</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cars.map(car => <GetCarCard key={car.id} car={car}></GetCarCard>)
                }
            </div>
        </div>
    );
};

export default GetCar;