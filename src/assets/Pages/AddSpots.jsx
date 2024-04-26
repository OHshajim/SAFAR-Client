
const AddSpots = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="py-20">

                <h1>Add Tourists Spots </h1>
                <form className=" space-y-4">
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
                            <input className=" input bg-black " placeholder="name" name="name" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Country Name</label>
                            <select className="select select-bordered" name="country">
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
                            <input className=" input bg-black " placeholder="Location" name="Location" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Seasonality</label>
                            <input className=" input bg-black " placeholder="Seasonality" name="Seasonality" type="text" />
                        </div>
                    </div>
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Travel time</label>
                            <input className=" input bg-black " placeholder="Travel time" name="travel_time" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Total Visitors Per Year</label>
                            <input className=" input bg-black " placeholder="Total Visitors Per Year" name="year" type="number" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Average cost</label>
                            <input className=" input bg-black " placeholder="average cost" name="average_cost" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-lg mb-1 font-semi-bold">Image</label>
                        <input className=" input bg-black " placeholder="Image URL " name="Image" type="text" />
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