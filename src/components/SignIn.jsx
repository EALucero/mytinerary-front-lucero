import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function SignIn({ mail_signin, password_signin, func }) {
    const [step, setStep] = useState(0)

    return (
        <article className="w-[80vw] flex flex-col items-center bg-white z-10 rounded-xl my-10 py-2 sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw]">
            {
                step == 0 ?
                    <div className="w-4/5 h-[15vh] text-left p-2">
                        <p className="text-gray-400">step 1 of 2</p>
                        <h3 className="text-[24px] font-bold">Sign in</h3>
                        <p className="mt-5">New user?{" "}
                            <Anchor
                                className="text-[18px] text-blue-500 font-bold cursor-pointer"
                                to='/auth/signup'
                            >
                                Create an account
                            </Anchor>
                        </p>
                    </div>
                    :
                    <div className="w-4/5 h-[15vh] text-left p-2">
                        <p className="text-gray-400">step 2 of 2</p>
                        <h3 className="text-[24px] font-bold">Enter your password</h3>
                        <p className="mt-5">New user?{" "}
                            <Anchor
                                className="text-[18px] text-blue-500 font-bold cursor-pointer"
                                to='/auth/signup'
                            >
                                Create an account
                            </Anchor>
                        </p>
                    </div>
            }
            <form className="flex flex-col items-center justify-center w-full h-[20vh] p-2 bg-white m-3 mb-0">
                <div className={step == 0 ? "flex flex-col w-full items-center justify-center" : "hidden"}>
                    <input
                        ref={mail_signin}
                        type="mail"
                        className="w-4/5 py-3 text-left border-b-2 border-gray-400"
                        name="mail"
                        id="mail"
                        defaultValue=""
                        placeholder="Email"
                    />
                    <input
                        type="button"
                        className="bg-primary text-white w-1/5 me-4 mt-16 py-2 text-center cursor-pointer self-end rounded"
                        value="Continue"
                        onClick={() => setStep(1)}
                    />
                </div>
                <div className={step != 0 ? "flex flex-col w-full items-center justify-center" : "hidden"}>
                    <input
                        ref={password_signin}
                        type="password"
                        className="w-4/5 py-3 text-left border-b-2 border-gray-400"
                        name="password"
                        id="password"
                        defaultValue=""
                        placeholder="Password"
                    />
                    <input
                        type="button"
                        className="bg-primary text-white w-1/5 me-4 mt-16 py-2 text-center cursor-pointer self-end rounded"
                        value="Continue"
                        onClick={() => func()}
                    />
                </div>
            </form>
            {/* {
                step == 0 ? */}
                    <div className="w-4/5 h-[30vh] text-left p-2">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-400 border-0" />
                            <span className="absolute px-5 font-medium text-gray-900 bg-white text-gray-400">o</span>
                        </div>
                        <div className="flex justify-evenly mt-7 gap-5">
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="google icon" />
                            </Anchor>
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook icon" />
                            </Anchor>
                        </div>
                    </div>
                   {/*  :
                    <div className="w-4/5 h-[30vh] text-left p-2">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-400 border-0" />
                            <span className="absolute px-5 font-medium text-gray-900 bg-white text-gray-400">o</span>
                        </div>
                        <div className="flex justify-evenly mt-7 gap-5">
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="google icon" />
                            </Anchor>
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook icon" />
                            </Anchor>
                        </div>
                    </div> */}
            {/* } */}
        </article>
    )
}