import { useEffect, useState } from "react";
import MyCartCard from "../MyCartCard/MyCartCard";


const MyCart = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/cart')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2 dark:text-white">Your Cart List</h1>
            <hr className="w-1/4 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cars.map(car => <MyCartCard key={car._id} car={car}
                        cars={cars}
                        setCars={setCars}></MyCartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;