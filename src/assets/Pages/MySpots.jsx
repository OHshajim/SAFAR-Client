import { useContext, useEffect, useState } from "react";
import SpotsCard from "../Components/SpotsCard";
import { AuthContext } from "../../Provider/AuthProvider";

const MySpots = () => {
    const [spots, setSpots] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    useEffect(() => {
        fetch(`http://localhost:5000/spots/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSpots(data)
        })

    }, [user])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot => <SpotsCard key={spot._id} spot={spot}></SpotsCard>)
                }
            </div>
        </div>
    );

};

export default MySpots;