import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const TouristsSpots = () => {
    const spots = useLoaderData()
    const { loading } = useContext(AuthContext)
    // console.log(spots);
    return (
        <div className="my-20 max-w-[1600px] mx-auto px-5">
            <div>
                <h3 className="text-center text-base md:text-xl ">Popular Spots</h3>
                <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mb-10 mt-2">Most Favorite Tourists Spots Around Us </h1>
                {
                    loading && <div className="flex justify-center items-center w-full"> <span className="flex justify-center items-center w-16 loading loading-bars my-10"></span></div>

                }
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 ">
                    {
                        spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristsSpots;