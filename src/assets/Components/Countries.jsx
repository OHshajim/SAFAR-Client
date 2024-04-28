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
        <div className="max-w-[1600px] mx-auto my-20 px-5">
            <h3 className="text-center text-base md:text-xl">Explore The Word</h3>
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl mb-10 mt-2">Explore The Beautiful Places Around Us </h1>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {
                    countries.map(country => <Country key={country._id} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;