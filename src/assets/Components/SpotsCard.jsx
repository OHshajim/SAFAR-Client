
const SpotsCard = ({ spot }) => {
    const {  spotName, location, country, seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl max-h-[600px]">
                <figure><img src={image} alt={spotName} className="m-4 rounded-lg"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    {
                        (description.length>100)? <p>{description.slice(0,100)}...</p>: <p>{description}</p>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotsCard;