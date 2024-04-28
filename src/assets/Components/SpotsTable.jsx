import { FaDeleteLeft } from "react-icons/fa6";

const SpotsTable = ({ spot, handleDelete, handleUpdate }) => {

    const { _id, tourists_spot_name, location, country_Name, seasonality, travel_time, visitorsPerYear, average_cost, image, description } = spot;
    const handleUpdateForm = (event) => {
        const form = event.target;

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
        const updatedSpot = { tourists_spot_name, location, country_Name, seasonality, travel_time, visitorsPerYear, average_cost, image, description };
        // console.log(spot);
        handleUpdate(updatedSpot, _id);



    }

    return (
        <tbody >
            <tr className="text-white">
                <td>{tourists_spot_name}</td>
                <td>{country_Name}</td>
                <td>{travel_time}</td>
                <td>{average_cost}$</td>
                <td><button
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                    className="btn bg-transparent border-cyan-500 text-cyan-500">Update</button></td>

                <td><button onClick={() => handleDelete(_id)} className="btn text-2xl bg-transparent border-red-500 text-red-500"><FaDeleteLeft /></button></td>
            </tr>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg">Update Spot data</h3>
                    <div className="modal-action flex-col">
                        <form method="dialog" className=" space-y-4" onSubmit={handleUpdateForm}  >
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Tourists spot name</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={tourists_spot_name} placeholder="Tourists spot name" name="spotName" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Country Name</label>
                                <select className="select select-bordered " name="country_Name">
                                    <option disabled selected>Select Country </option>
                                    <option>Bangladesh</option>
                                    <option>Thailand</option>
                                    <option>Indonesia</option>
                                    <option>Malaysia</option>
                                    <option>Vietnam</option>
                                    <option>Cambodia</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Location</label>
                                <input className=" input bg-[#9f9f9f42] "  required defaultValue={location} placeholder="Location" name="location" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Seasonality</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={seasonality} placeholder="Seasonality" name="seasonality" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Travel time</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={travel_time} placeholder="Travel time" name="travel_time" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Total Visitors Per Year</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={visitorsPerYear} placeholder="Total Visitors Per Year" name="visitorsPerYear" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Average Cost</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={average_cost} placeholder="Average Cost" name="average_cost" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Image</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={image} placeholder="Image URL " name="image" type="text" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-lg mb-1 font-semi-bold">Short description</label>
                                <input className=" input bg-[#9f9f9f42] " required defaultValue={description} placeholder="short description" name="description" type="text" />
                            </div>
                            <input type="submit" value="Update" className="btn w-full bg-transparent btn-outline border-cyan-500 text-cyan-500 " />
                        </form>
                    </div>
                </div>
            </dialog>

        </tbody>
    );
};
export default SpotsTable;