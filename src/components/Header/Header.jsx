import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import profile from '../../assets/user.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
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
                                Add Car
                            </NavLink>
                            </li>
                            <li><NavLink
                                to="/myCart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                My Cart
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
                            Add Car
                        </NavLink>
                        </li>
                        <li className="text-xl font-semibold mx-3"><NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            My Cart
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex'>
                                <img className='w-12 mr-2 rounded-full h-12' src={user?.photoURL} alt="" />
                                <h2 className="flex items-center text-sm font-medium mr-2">{user?.displayName}</h2>
                                <Link onClick={handleSingOut} to="/login" className="btn btn-active btn-neutral text-sm">Sign Out</Link>
                            </div>
                            :
                            <Link to="/login" className="btn btn-active btn-neutral text-sm">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;