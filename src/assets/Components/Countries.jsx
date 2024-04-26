import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)
            })
    }, [])
    return (
        <div className="max-w-[1600px] mx-auto my-20">
            <h1 className="text-center text-5xl">Countries </h1>
            <p  className="text-center mb-10 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam eligendi eius illo minus nisi dolorum assumenda asperiores amet, aperiam officia, molestias provident nemo dignissimos aliquid minima. Libero suscipit corporis
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    countries.map(country => <Country key={country._id} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;