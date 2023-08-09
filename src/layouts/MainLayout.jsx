import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col
            sm:bg-red-300 
            md:bg-red-500 
            lg:bg-red-700
            xl:bg-red-900 xl:w-[90vw] xl:m-auto">
            <NavBar />
            {/* {console.log(name2)} */}
            {/* esto es un comentario */}
            {/* aca se debe insertar el contenido de cada vista */}
            <Outlet />
            <Footer />
        </div>
    )
}
