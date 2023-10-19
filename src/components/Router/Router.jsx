import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MyCart from "../MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import GetCar from "../GetCar/GetCar";
import Bmw from "../Bmw/Bmw";
import Honda from "../Honda/Honda";
import Toyota from "../Toyota/Toyota";
import Tesla from "../Tesla/Tesla";
import Mercedes from "../Mercedes/Mercedes";
import Ford from "../Ford/Ford";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/getCar",
                element: <GetCar></GetCar>
            },
            {
                path: "/bmw",
                element: <Bmw></Bmw>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/honda",
                element: <Honda></Honda>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/toyota",
                element: <Toyota></Toyota>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/tesla",
                element: <Tesla></Tesla>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/mercedes",
                element: <Mercedes></Mercedes>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/ford",
                element: <Ford></Ford>,
                loader: () => fetch('http://localhost:5000/cars')
            },
        ],
    },
]);

export default router;