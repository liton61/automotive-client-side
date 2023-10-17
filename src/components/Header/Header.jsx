import { NavLink } from "react-router-dom";
import logo  from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-red-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                            </li>
                            <li><NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                            </li>
                            <li><NavLink
                                to="/myCard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                My Card
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className="w-28" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-xl font-semibold mx-3"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                        </li>
                        <li className="text-xl font-semibold mx-3"><NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Add Product
                        </NavLink>
                        </li>
                        <li className="text-xl font-semibold mx-3"><NavLink
                            to="/myCard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            My Card
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink
                        to="/Login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <button className="btn btn-neutral text-xl font-semibold">Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;