import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot);
    const {  tourists_spot_name, location,  seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    return (
        <div className="py-20 max-w-[1600px] mx-auto">
            <Link to="/"><button className="btn my-5">Back to Home</button></Link>
            <div className="card lg:card-side  shadow-xl">
                <img src={image} alt={tourists_spot_name} className="lg:w-1/2 w-full "/>
                <div className=" px-10 lg:w-1/2 w-full">
                    <h2 className="text-4xl font-semibold">{tourists_spot_name}</h2>
                    <p>{description}</p>
                    <div >
                        <h3>{location}</h3>
                        <h3>Best Time : {seasonality}</h3>
                        <h3>Tavel Time : {travel_time}</h3>
                        <h3>Total Visitors/Year : {visitorsPerYear}</h3>
                        <h3>Average Cost : {average_cost}$</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;