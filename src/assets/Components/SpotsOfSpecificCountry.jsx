import { useLoaderData } from 'react-router-dom';
import CountrySpotCard from './CountrySpotCard';

const SpotsOfSpecificCountry = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div className='py-20 max-w-[1600px] mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    spots.map(spot =><CountrySpotCard key={spot._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default SpotsOfSpecificCountry;