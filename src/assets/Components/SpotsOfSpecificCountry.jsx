import { useLoaderData } from 'react-router-dom';
import CountrySpotCard from './CountrySpotCard';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SpotsOfSpecificCountry = () => {
    const { loading } = useContext(AuthContext)
    const spots = useLoaderData()
    // console.log(spots);
    return (
        <div className='py-20 max-w-[1600px] mx-auto'>
            {
                loading && <div className="flex justify-center items-center w-full"> <span className="flex justify-center items-center w-16 loading loading-bars my-10"></span></div>

            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    spots.map(spot => <CountrySpotCard key={spot._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default SpotsOfSpecificCountry;