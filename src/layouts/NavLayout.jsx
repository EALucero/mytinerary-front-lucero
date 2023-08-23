import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <div style={{backgroundColor:"#EBEBEB"}} className="w-full min-h-screen flex flex-col
            xl:m-auto">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}