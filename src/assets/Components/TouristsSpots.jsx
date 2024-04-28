import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";

const TouristsSpots = () => {
    const spots = useLoaderData()
    // console.log(spots);
    return (
        <div className="my-20 max-w-[1600px] mx-auto ">
            <div>
                <h3 className="text-center text-xl ">Popular Spots</h3>
                <h1 className="text-center text-5xl mb-10 mt-2">Most Favorite Tourists Spots Around Us </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                    {
                        spots.slice(0,6).map(spot => <SpotsCard key={spot._id} spot={spot} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;