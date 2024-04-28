import { useContext, useEffect, useState } from "react";
import SpotsCard from "../Components/SpotsCard";
import { AuthContext } from "../../Provider/AuthProvider";
import SpotsTable from "../Components/SpotsTable";

const MySpots = () => {
    const [spots, setSpots] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    useEffect(() => {
        fetch(`http://localhost:5000/spots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data)
            })

    }, [user])
    return (
        <div className="max-w-[1600px] py-20 mx-auto">
            <h1 className="text-5xl my-10">My List </h1>
            <div className="overflow-x-auto ">
                <table className="table border rounded-xl md:p-10 border-separate bg-[#4848482c]">
                    <thead className="border-b border-white">
                        <tr className="text-white">
                            <th className="">Spot Name</th>
                            <th className="">Country</th>
                            <th className="">Travel Time</th>
                            <th className="">Average Cost</th>
                            <th className="">Update</th>
                            <th className="">Delete</th>
                        </tr>
                    </thead>
                    {
                        spots.map((spot) => <SpotsTable key={spot._id} spot={spot} />)
                    }

                </table>
            </div>
        </div>
    );

};

export default MySpots;