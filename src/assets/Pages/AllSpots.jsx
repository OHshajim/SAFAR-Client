import { useContext, useEffect, useState } from 'react';
import SpotsCard from '../Components/SpotsCard';

const AllSpots = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoad] = useState(true)

    useEffect(() => {
        fetch('https://b9a10-server-side-one.vercel.app/spots')
            .then(res => res.json())
            .then(data => {
                setSpots(data)
                setLoad(false)
            })
    }, [])
    const handleShot = () => {
        setLoad(true)
        fetch('https://b9a10-server-side-one.vercel.app/sortedSpots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                setLoad(false)
                // console.log(data);
            })
    }

    return (
        <div className='py-20 flex flex-col justify-center items-center max-w-[1600px] mx-auto px-5'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold  my-10'>All Tourists Spots  </h1>
            <div className="dropdown mb-5">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu   shadow bg-base-100 rounded-box w-36">
                    <button className='p-2' onClick={handleShot}>average_cost</button>
                </ul>
            </div>
            {
                loading && <div className="flex justify-center items-center w-full"> <span className="flex justify-center items-center w-16 loading loading-bars my-10"></span></div>

            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default AllSpots;