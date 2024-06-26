import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SpotsTable from "../Components/SpotsTable";
import Swal from "sweetalert2";

const MySpots = () => {
    const [spots, setSpots] = useState([])
    const [loading,setLoad] =useState(true)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://b9a10-server-side-one.vercel.app/spots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSpots(data)
                setLoad(false)
            })

    }, [user, spots])
    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b9a10-server-side-one.vercel.app/spots/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(spot => spot._id !== _id)
                            setSpots(remaining)
                        }
                    })
            }
        })
    };


    const handleUpdate = (UpdatedSpot, _id) => {
        fetch(`https://b9a10-server-side-one.vercel.app/spots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Successfully Updated ',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }

            })
    }

    return (
        <div className="max-w-[1600px] py-20 mx-auto px-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold my-10">My List : Spots </h1>
            <div className="overflow-x-auto ">
                <table className="table border rounded-xl md:p-10 border-separate bg-neutral">
                    <thead className="border-b border-white">
                        <tr className="text-cyan-100">
                            <th >Spot Name</th>
                            <th >Country</th>
                            <th >Travel Time</th>
                            <th >Average Cost</th>
                            <th >Update</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    {
                        loading && <div className="flex justify-center items-center w-full"> <span className="flex justify-center items-center w-16 loading loading-bars my-10"></span></div>

                    }
                    {
                        spots.map((spot) => <SpotsTable
                            key={spot._id}
                            spot={spot}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />)
                    }

                </table>
            </div>
        </div>
    );

};

export default MySpots;