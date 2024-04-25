import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;