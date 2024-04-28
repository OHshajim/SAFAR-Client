import { FaDeleteLeft } from "react-icons/fa6";

const SpotsTable = ({ spot}) => {
    const { tourists_spot_name, country_Name, travel_time, average_cost } = spot;

    const handleDelete =()=>{
        
    }
    const handleUpdate =()=>{

    }
    return (
        <tbody>
            <tr>
                <td>{tourists_spot_name}</td>
                <td>{country_Name}</td>
                <td>{travel_time}</td>
                <td>{average_cost}$</td>
                <td><button onClick={handleUpdate} className="btn">Update</button></td>
                <td><button onClick={handleDelete} className="btn text-2xl bg-transparent border-red-500 text-red-500"><FaDeleteLeft /></button></td>
            </tr>
        </tbody>
    );
};
export default SpotsTable;