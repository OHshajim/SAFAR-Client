import { FaLocationDot } from "react-icons/fa6";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TbZoomMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

const CountrySpotCard = ({ spot }) => {
    const { _id, tourists_spot_name, country_Name, average_cost, location, description, seasonality } = spot;
    // console.log(spot);
    return (
        
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title ">{tourists_spot_name}</h2>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-2">
                            <TbZoomMoney className="text-xl" />
                            From : ${average_cost}</p>

                        <p className="flex items-center gap-2 justify-end"><FaLocationDot /> {country_Name}</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className="flex items-center gap-2"><FaLocationDot /> {location}</p>
                        <p className="flex items-center justify-end gap-1"><PiPaperPlaneRightFill />{seasonality}</p>
                    </div>
                    {
                        (description.length < 150) ? <p>{description}</p> : <p>{description.slice(0, 151)}...</p>
                    }

                    <div className="card-actions justify-end">
                        <Link to={`/spotDetails/${_id}`}><button className="btn btn-outline border-cyan-500 text-cyan-500 ">View Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default CountrySpotCard;