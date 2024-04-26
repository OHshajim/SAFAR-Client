import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";

const TouristsSpots = () => {
    const spots = useLoaderData()
    // console.log(spots);
    return (
        <div className="my-20 max-w-[1600px] mx-auto ">
            <div>
                <h1 className="text-center text-5xl">Most Popular Tourists Spots </h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem earum dolor ratione libero in nam laboriosam harum, explicabo, porro, sunt pariatur corrupti ut </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                    {
                        spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;