import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { set } from "firebase/database";

const Navbar = () => {
    // theme 
    const { user, Logout } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])

    const themeSwitch = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    }
    
    // console.log(user);
    const handleLogout = () => {
        Logout()
    }
    const links = <>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>Home</li></NavLink>

        <NavLink to="/allSpots"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>All Tourists Spot</li></NavLink>

        <NavLink to="/addSpots"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>Add Tourists Spot</li></NavLink>

        <NavLink to={'/mySpots'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>My List</li></NavLink>

    </>
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY > 50) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div>
            <div className={fix ? "navbar fixed z-10  duration-500 bg-slate-800 text-white" : "text-white navbar bg-[#3b3b3b7c] duration-300 fixed z-10"}>
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
                    <a className="btn btn-ghost text-xl px-0 sm:px-5">SAFAR</a>
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
                                <div className="w-11 rounded-full ring ring-cyan-500  clickable" id="clickable" >
                                    <img src={user.photoURL} />
                                </div>
                            </div> :
                            <div className="flex gap-2">
                                <Link to="/login"><button className="btn px-2 sm:px-4 text-sm sm:text-base btn-outline border-cyan-500 text-cyan-500">Login</button></Link>
                                <Link to="/register"><button className="btn px-2 sm:px-4 text-sm sm:text-base btn-outline border-teal-500 text-teal-500">Register</button></Link>
                            </div>
                    }
                    <Tooltip anchorSelect=".clickable" clickable >
                        <p>{user?.displayName}</p>
                        <button className="btn btn-error mt-2 " onClick={handleLogout}>Logout</button>
                    </Tooltip>
                </div>

                <label className="cursor-pointer grid place-items-center sm:px-5">
                    <input type="checkbox" value="synthwave"
                        onChange={themeSwitch}
                        checked={theme === "light" ? false : true}
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>


        </div>
    );
};

export default Navbar;