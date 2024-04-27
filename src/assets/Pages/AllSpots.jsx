import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotsCard from '../Components/SpotsCard';

const AllSpots = () => {
    const spots = useLoaderData()
    return (
        <div className='py-20 flex flex-col justify-center items-center max-w-[1600px] mx-auto'>
            <h1 className='text-5xl  my-10'>All Spots </h1>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>average_cost</a></li>
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