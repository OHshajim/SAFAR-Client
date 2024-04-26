import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";

const TouristsSpots = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div className="my-20 max-w-[1600px] mx-auto text-center">
            <div>
                <h1>Most Popular Tourists Spots </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem earum dolor ratione libero in nam laboriosam harum, explicabo, porro, sunt pariatur corrupti ut </p>
                <div>
                    {
                        spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;