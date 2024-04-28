import AboutUs from "../Components/AboutUs";
import Adventure from "../Components/Adventure";
import Banner from "../Components/Banner/Banner";
import Countries from "../Components/Countries";
import TouristsSpots from "../Components/TouristsSpots";

const Home = () => {
    return (
        <div>
            <Banner />
            <TouristsSpots />
            <Countries />
            <Adventure/>
            <AboutUs/>
        </div>
    );
};

export default Home;