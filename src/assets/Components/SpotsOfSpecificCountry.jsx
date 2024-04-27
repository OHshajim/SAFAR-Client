import { useLoaderData } from 'react-router-dom';
import SpotsCard from './SpotsCard';

const SpotsOfSpecificCountry = () => {
    const spots = useLoaderData()
    console.log(spots);
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

export default SpotsOfSpecificCountry;