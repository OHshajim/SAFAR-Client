import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { country_Name, image, description, _id } = country
    return (
        <div>
            <Link>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={image} alt={country_Name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{country_Name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Country;