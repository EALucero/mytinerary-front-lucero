import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2"
import user_actions from "../store/actions/users";
const { signin } = user_actions
import SignIn from "../components/SignIn";

export default function Form() {
  const navigate = useNavigate()
  const mail_signin = useRef();
  const password_signin = useRef();
  const dispatch = useDispatch()

  function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };

    dispatch(signin({ data }))
      .then(res => {
        //console.log(res)

        if (res.payload.token) {
          Swal.fire({
            icon: 'success',
            title: 'Loggen in!',
          })

          navigate('/')
        } else if (res.payload.messages.length > 0) {
          let html = res.payload.messages.map(e => `<p>${e}</p>`).join('')

          Swal.fire({
            title: 'User signin failed!',
            icon: 'error',
            html
          })
        }
      })
      .catch(err => console.log(err))
  }

  /* let user = useSelector(store => store.users.user)
  console.log(user); */

  return (
    <main className="grow flex items-center">
      <img className="w-full h-[100vh] absolute top-[0px]" src="/img/backgroundSign.jpg" alt="" />
      <div className="flex z-10 gap-10 p-2 rounded justify-evenly items-center m-auto">
        <article className="hidden md:flex md:w-[32vw] md:z-10">
          <h2 className="tw-[274px] h-[64px] text-[36px] text-white font-bold font-outline-1">My Tinerary</h2>
        </article>
        <SignIn mail_signin={mail_signin} password_signin={password_signin} func={handleSignIn} />
      </div>
    </main>
  );
}