import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { set } from "firebase/database";

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        Logout()
            .then(() => {
                alert("logout")
            })
    }
    const links = <>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg " : " px-5 py-2 rounded-lg"
            }
        ><li>Home</li></NavLink>

        <NavLink to="/all"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>All Tourists Spot</li></NavLink>

        <NavLink to="/add"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>Add Tourists Spot</li></NavLink>

        <NavLink to="/my"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>My List</li></NavLink>

    </>
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY > 100) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div>
            <div className={fix ? "navbar fixed z-10  duration-500 bg-slate-800" : "navbar bg-transparent duration-300 fixed z-10"}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Name</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="avatar ">
                                <div className="w-11 rounded-full ring " id="clickable">
                                    <img src={user.photoURL} />
                                </div>
                            </div> :
                            <div className="flex gap-2">
                                <Link to="/login"><button className="btn ">Login</button></Link>
                                <Link to="/register"><button className="btn ">Register</button></Link>
                            </div>
                    }
                </div>
            </div>
            <Tooltip anchorSelect="#clickable" place="bottom-start" clickable>
                <div>
                    <p>{user?.displayName}</p>
                    <button className="btn btn-error" onClick={handleLogout}>Logout</button>
                </div>
            </Tooltip>


        </div>
    );
};

export default Navbar;