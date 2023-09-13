import { useRef, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import SignUp from "../components/SignUp";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { read_users } = user_actions

export default function Form() {
  const navigate = useNavigate()
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch()

  useEffect(
    () => { dispatch(read_users()) },
    [reload]
  )

  async function handleSignUp() {
    try {
      let other = "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg";

      let data = {
        mail: mail.current.value,
        password: password.current.value,
        name: name.current.value,
        lastName: lastName.current.value,
        photo: photo.current.value != "" ? value : other,
        country: country.current.value,
      }

      if (photo.current.value) {
        data.photo = photo.current.value
      }

      await axios.post(
        apiUrl + "auth/register",
        data
      );

      Swal.fire({
        title: "User Registered",
        icon: "success"
      })

      setReload(!reload)
      //console.log(data);
      navigate('/auth/signin')
    } catch (error) {
      let faild = error.response.data.messages
      //console.log(error)

      Swal.fire({
        title: 'User registration failed!',
        icon: 'error',
        html: faild.map(each => `<p>${each}</p>`).join(''),
      })
    }
  }

  return (
    <main className="grow flex items-center">
      <img className="w-full h-[120vh] absolute top-[0px]" src="/img/backgroundLog.jpg" alt="" />
      <div className="flex z-10 gap-10 p-2 rounded justify-evenly items-center m-auto">
        <article className="hidden md:flex md:w-[32vw] md:z-10">
          <h2 className="w-[274px] h-[64px] text-[36px] text-white font-bold font-outline-1">My Tinerary</h2>
        </article>
        <SignUp mail={mail} password={password} name={name} lastName={lastName} photo={photo} country={country} func={handleSignUp} />
      </div>
    </main>
  );
}