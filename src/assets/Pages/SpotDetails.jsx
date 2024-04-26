import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot);
    const { _id, spotName, location, country, seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    return (
        <div className="py-20 max-w-[1600px] mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt={spotName} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;