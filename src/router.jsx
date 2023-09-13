import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Itineraries from "./pages/Itineraries";
import NavLayout from './layouts/NavLayout';
import FormSignUp from "./pages/FormSignUp";
import FormSignIn from "./pages/FormSignIn";
import Profile from "./pages/Profile";
/* import Activities from "./pages/Activities"; */

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/signin", element: <SignIn /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/profile", element: <Profile /> },
            { path: "/cities", element: <Cities /> },
            { path: "/cities/:city_id", element: <CityDetail /> },
            { path: "/auth/signup", element: <FormSignUp /> },
            { path: "/auth/signin", element: <FormSignIn /> },
            { path: "/*", element: <NotFound /> },
        ],
    },
    {
        path: "/",
        element: <NavLayout />,
        children: [{
            path: "/layout", element: <Itineraries />,
            /* path: "/layout", element: <Activities /> */
        }],
    },
    {
        path: "/itineraries",
        element: <Itineraries />,
    },
    /* {
        path: "/activities",
        element: <Activities />,
    }, */
]);

export default router;