/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import google from '../../assets/google.jpg'


const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                window.location.href = '/';
            })
            .catch((error) => console.log(error))
    }
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div>
                <div className="bg-gray-100 flex items-center justify-center py-20">
                    <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                            </div>
                            <div className="mb-6 flex justify-center items-center">
                                <img onClick={googleLogin} className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
                            </div>
                        </form>
                        <p className="text-gray-600 text-sm text-center">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;