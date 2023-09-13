import logo from "/img/myTineraryLogo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from "./Display";
import Label from "./Label";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar() {
  const navigate = useNavigate();
  let [show, setShow] = useState(false);
  let photo = useSelector((store) => store.users.user?.photo);
  let dispatch = useDispatch();

  let options = [
    { to: "/", title: "Home", show: true },
    { to: "/cities", title: "Cities", show: true },
    {
      to: "/auth/signin",
      title: "Log In",
      show: photo ? false : true,
    },
    {
      to: "/profile",
      title: "Profile",
      show: photo ? true : false,
    },
    {
      title: "Sign Out",
      show: photo ? true : false,
      onClick: () => {
        dispatch(signout());
        navigate("/");
      },
    },
  ];
  /* let [show, setShow] = useState(false);
    let options = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
    { to: "/auth/signin", title: "Log In", backgroundColor: "#4F46E5", color: "white", height: "64px" },
  ]
 */
  return (
    <header className="w-[full] h-[64px] z-10 px-6 flex justify-between items-center mt-[32px] bg-opacity-0">
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
        <h1 className="flex text-[30px] font-bold
            md:hidden">
            My Tinerary
          </h1>
        <div>   
          {photo && <img className="w-[64px] bg-white gap-2 rounded-full cursor-pointer md:hidden" src={photo} alt="img"/>}
          {/* <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-[64px] bg-white gap-2 p-[5px] rounded-full cursor-pointer font-sans
            md:hidden">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg> */}
          {/* {show && <Label options={options} />} */}
          <Label options={options} />
        </div>
      </div>
    </header>
  )
}