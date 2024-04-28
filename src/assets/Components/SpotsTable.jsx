import { FaDeleteLeft } from "react-icons/fa6";

const SpotsTable = ({ spot, handleDelete }) => {

    const { _id, tourists_spot_name, country_Name, travel_time, average_cost } = spot;

    const handleUpdate = () => {

    }
    return (
        <tbody>
            <tr>
                <td>{tourists_spot_name}</td>
                <td>{country_Name}</td>
                <td>{travel_time}</td>
                <td>{average_cost}$</td>
                <td><button onClick={()=>handleUpdate(_id)} className="btn bg-transparent border-cyan-500 text-cyan-500">Update</button></td>
                <td><button onClick={()=>handleDelete(_id)} className="btn text-2xl bg-transparent border-red-500 text-red-500"><FaDeleteLeft /></button></td>
            </tr>
        </tbody>
    );
};
export default SpotsTable;