import { FaLocationDot } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TbZoomMoney } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot);
    const { tourists_spot_name, location, seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    return (
        <div className="py-20 max-w-[1600px] mx-auto">
            <h1 className="text-5xl">Spot Details  </h1>
            <Link to="/"><button className="btn my-5">Back to Home</button></Link>
            <div className="card lg:card-side  shadow-xl">
                <img src={image} alt={tourists_spot_name} className="lg:w-1/2 w-full " />
                <div className=" px-10 lg:w-1/2 w-full">
                    <h2 className="text-4xl font-semibold">{tourists_spot_name}</h2>
                    <p className="flex items-center gap-2"><FaLocationDot /> {location}</p>
                    <p className="my-3">{description}</p>
                    <div >
                        <div className="flex justify-between items-center ">
                            <p className="flex items-center gap-2">
                                <TbZoomMoney className="text-xl" />
                                From : ${average_cost}</p>
                            <p className="flex items-center gap-2 justify-end"><MdGroups2 className="text-xl" /> {visitorsPerYear}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="flex items-center gap-1"><IoTimerOutline className="text-lg" />{travel_time}</p>
                            <p className="flex items-center gap-1"><PiPaperPlaneRightFill />{seasonality}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;