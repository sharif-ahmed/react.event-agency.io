import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from './../PrivateRoute';
import AboutUs from "../../pages/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import Team from "../../pages/Team/Team";
import Works from "../../pages/Works/Works";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/works",
                element: <PrivateRoute><Works></Works></PrivateRoute>
            },
            {
                path: "/team",
                element: <PrivateRoute><Team></Team></PrivateRoute>
            },
            {
                path: "/services",
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },

]);

export default Router;