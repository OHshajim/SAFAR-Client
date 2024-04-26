import { useLoaderData } from 'react-router-dom';
import SpotsCard from './SpotsCard';

const SpotsOfSpecificCountry = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div>
            {
                spots.map(spot=><SpotsCard key={spot._id} spot={spot}></SpotsCard>)
            }
        </div>
    );
};

export default SpotsOfSpecificCountry;