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
import Brand from "../Brand/Brand";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/cars')
                loader: () => fetch('/brand.json')
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
                path: "/brands/:id",
                element: <Brand></Brand>,
            }
        ],
    },
]);

export default router;