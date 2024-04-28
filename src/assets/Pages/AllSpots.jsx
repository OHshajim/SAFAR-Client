import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotsCard from '../Components/SpotsCard';

const AllSpots = () => {
    const loadSpots = useLoaderData()
    const [spots, setSpots] = useState(loadSpots);
    const handleShot = () => {
        fetch('http://localhost:5000/sortedSpots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                console.log(data);
            })
    }
    const handleAll = () => {
        setSpots(loadSpots)
    }

    return (
        <div className='py-20 flex flex-col justify-center items-center max-w-[1600px] mx-auto px-5'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl  my-10'>All Tourists Spots  </h1>
            <div className="dropdown mb-5">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu   shadow bg-base-100 rounded-box w-36">
                    <button className='p-2' onClick={handleAll}>Reset</button>
                    <button className='p-2' onClick={handleShot}>average_cost</button>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default AllSpots;