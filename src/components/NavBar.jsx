import logo from "../../public/img/myTineraryLogo.png"
import { useState } from "react";
import Display from "./Display";
import Label from "./Label";

export default function NavBar() {
  let [show, setShow] = useState(false);
  let options = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
    { to: "/signin", title: "Log In", backgroundColor: "#4F46E5", color: "white", height: "64px" },
  ]

  return (
    <header style={{ backgroundColor: "#EBEBEB" }} className="w-[full] h-[64px] px-20 flex justify-between items-center mt-[32px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[96px] h-[64px] bg-white gap-2 p-[5px] rounded-xl cursor-pointer font-sans
        md:hidden md:w-[354px]"
        onClick={() => setShow(!show)}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div className="w-full flex justify-between items-center">
        <div>
          {show && <Display options={options} />}
          <img src={logo} alt="logo" className="hidden w-[180px] self-center md:flex md:rounded" />
        </div>
        <div>
          <h1 className="flex text-[24px] font-bold
            md:hidden">
            My Tinerary
          </h1>
          <Label options={options} />
        </div>
      </div>
    </header>
  )
}