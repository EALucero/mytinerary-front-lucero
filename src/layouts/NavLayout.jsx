import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <div style={{backgroundColor:"#EBEBEB"}} className="w-full min-h-screen flex flex-col">
        <NavBar />
        {/* contenido dinamico de la interfaz */}
        <Outlet />
    </div>
  )
}