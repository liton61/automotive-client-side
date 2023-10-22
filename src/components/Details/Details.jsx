import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";


const Details = () => {
    const [details, setDetails] = useState({});
    const { _id } = useParams();
    const loadDetails = useLoaderData();
    useEffect(() => {
        const findDetails = loadDetails.find((details) => details._id === _id)
        setDetails(findDetails)
    }, [_id, loadDetails])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2">Car Details</h1>
            <hr className="w-1/5 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div>
                <DetailsCard details={details}></DetailsCard>
            </div>
        </div>
    );
};

export default Details;