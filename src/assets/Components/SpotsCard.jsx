import { FaLocationDot } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TbZoomMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {
    const { _id, tourists_spot_name, country_Name, seasonality, travel_time, visitorsPerYear, average_cost, image} = spot;
    return (
        <div>
            <div className="card   shadow-xl max-h-[600px]">
                <img src={image} alt={tourists_spot_name} className=" w-full sm:h-[300px] min-h-[200px] rounded-lg" />
                <div className="card-body">
                    <p className="flex items-center gap-2"><FaLocationDot /> {country_Name}</p>
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-2">
                            <TbZoomMoney className="text-xl" />
                            From : ${average_cost}</p>
                        <p className="flex items-center gap-2 justify-end"><MdGroups2 className="text-xl" /> {visitorsPerYear}</p>
                    </div>
                    <hr />
                    <div className="card-actions justify-between items-center">
                        <div>
                            <p className="flex items-center gap-1"><IoTimerOutline className="text-lg" />{travel_time}</p>
                            <p className="flex items-center gap-1"><PiPaperPlaneRightFill />{seasonality}</p>
                        </div>

                        <Link to={`/spotDetails/${_id}`}><button className="btn btn-outline border-cyan-500 text-cyan-500">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotsCard;