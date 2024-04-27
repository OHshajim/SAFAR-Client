import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {
    const {_id, tourists_spot_name, location, country, seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    return (
        <div>
            <div className="card   shadow-xl max-h-[600px]">
                <img src={image} alt={tourists_spot_name} className="mx-3 w-full sm:h-[300px] min-h-[200px] rounded-lg" />
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    {
                        (description.length > 100) ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>
                    }
                    <div className="card-actions justify-end">
                        <Link to={`/spotDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotsCard;