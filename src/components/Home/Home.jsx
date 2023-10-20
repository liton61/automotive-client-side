// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import GetCar from "../GetCar/GetCar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <BrandCollection></BrandCollection> */}
            {/* <h1 className="text-center text-4xl font-bold my-12">Our Car Collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-6">
                {
                    loadCar.map(car => <GetCar key={car._id} car={car}></GetCar>)
                }
            </div> */}
        </div>
    );
};

export default Home;