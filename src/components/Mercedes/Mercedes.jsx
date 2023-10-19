import { useLoaderData } from "react-router-dom";
import MercedesCard from "../MercedesCard/MercedesCard";


const Mercedes = () => {
    const loadMercedes = useLoaderData();

    const filterCriteria = "HONDA";

    const filteredCars = loadMercedes.filter(car => car.brand === filterCriteria);

    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10 mb-3">Our MERCEDES Collection</h1>
                <hr className="w-1/2 mx-auto border-b-2 border-gray-500 mb-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredCars.map(mercedes => <MercedesCard key={mercedes._id} mercedes={mercedes}></MercedesCard>)
                }
            </div>
        </div>
    );
};

export default Mercedes;