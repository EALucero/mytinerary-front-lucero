import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div style={{backgroundColor:"#EBEBEB"}} className="w-full min-h-screen flex flex-col
            sm:bg-red-300 
            md:bg-red-500 
            lg:bg-red-700
            xl:m-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
