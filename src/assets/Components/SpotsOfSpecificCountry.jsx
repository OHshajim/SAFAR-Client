import { useLoaderData } from 'react-router-dom';
import CountrySpotCard from './CountrySpotCard';


const SpotsOfSpecificCountry = () => {
    const spots = useLoaderData()
    // console.log(spots);
    return (
        <div className='py-20 max-w-[1600px] mx-auto'>
            <h1 className=" font-bold text-center text-2xl md:text-3xl lg:text-5xl mb-10 mt-2">Countries Spots </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    spots.map(spot => <CountrySpotCard key={spot._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default SpotsOfSpecificCountry;