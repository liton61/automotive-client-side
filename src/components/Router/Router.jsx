import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MyCart from "../MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import GetCar from "../GetCar/GetCar";
import GetCarCard from "../GetCarCard/GetCarCard";
import Details from "../Details/Details";
import Car from "../Car/Car";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/brand')
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/myCart/:id",
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
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/cars/${params.id}`)
            },
            {
                path: "/getCar",
                element: <GetCar></GetCar>,
            },
            {
                path: "/getCarCard",
                element: <GetCarCard></GetCarCard>
            },
            {
                path: "/details/:_id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/cars')
            },
            {
                path: "/car/:name",
                element: <Car></Car>,
                loader: ({ params }) => fetch(`https://automotive-server-side-aap2cdtbc-liton-mias-projects.vercel.app/allCars/${params.name}`)
            }
        ],
    },
]);

export default router;