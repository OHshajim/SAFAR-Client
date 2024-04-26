
const AddSpots = () => {
    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const tourists_spot_name = form.spotName.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const visitorsPerYear = form.visitorsPerYear.value;
        const average_cost = form.average_cost.value;
        const image = form.image.value;
        const description = form.description.value;
        // console.log(name, email, spotName, location, country, seasonality, travel_time, visitorsPerYear, average_cost, image, description);
        const spot = { name, email, tourists_spot_name, location, country_Name, seasonality, travel_time, visitorsPerYear, average_cost, image, description };
        console.log(spot);

        fetch("http://localhost:5000/spots", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(spot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="py-20">

                <h1>Add Tourists Spots </h1>
                <form className=" space-y-4" onSubmit={handleAddSpot}>
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Name</label>
                            <input className=" input bg-black " placeholder="Enter your name" name="name" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Email</label>
                            <input className=" input bg-black " placeholder="Enter your  email" name="email" type="email" />
                        </div>
                    </div>
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Tourists spot name</label>
                            <input className=" input bg-black " placeholder="Tourists spot name" name="spotName" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Country Name</label>
                            <select className="select select-bordered" name="country_Name">
                                <option disabled selected>Select Country </option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Location</label>
                            <input className=" input bg-black " placeholder="Location" name="location" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Seasonality</label>
                            <input className=" input bg-black " placeholder="Seasonality" name="seasonality" type="text" />
                        </div>
                    </div>
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Travel time</label>
                            <input className=" input bg-black " placeholder="Travel time" name="travel_time" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Total Visitors Per Year</label>
                            <input className=" input bg-black " placeholder="Total Visitors Per Year" name="visitorsPerYear" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Average Cost</label>
                            <input className=" input bg-black " placeholder="Average Cost" name="average_cost" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-lg mb-1 font-semi-bold">Image</label>
                        <input className=" input bg-black " placeholder="Image URL " name="image" type="text" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-lg mb-1 font-semi-bold">Short description</label>
                        <input className=" input bg-black " placeholder="short description" name="description" type="text" />
                    </div>

                    <input type="submit" value="Add" className="btn w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddSpots;