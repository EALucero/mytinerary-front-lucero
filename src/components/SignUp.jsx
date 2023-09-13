import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function SignUp({ mail, password, name, lastName, photo, country, func }) {
    const [step, setStep] = useState(0);
    let countries = ["Argentina", "Brazil", "Bolivia", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"]

    return (
        <article className="w-[80vw] flex flex-col items-center bg-white z-10 rounded-xl my-10 py-2 sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw]">
            {
                step == 0 ?
                    <div className="w-4/5 h-[35vh] text-left p-2">
                        <p className="text-gray-400">step 1 of 2</p>
                        <h3 className="text-[24px] font-bold">Create account</h3>
                        <div className="flex mt-7 gap-5">
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="google icon" />
                            </Anchor>
                            <Anchor to=''>
                                <img className="w-[50px] rounded-full" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook icon" />
                            </Anchor>
                        </div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-400 border-0" />
                            <span className="absolute px-5 font-medium text-gray-900 bg-white text-gray-400">o</span>
                        </div>
                        <p className="font-bold">Sign up with email</p>
                        <p>Already have an account?{" "}
                            <Anchor
                                className="text-[18px] text-blue-500 font-bold cursor-pointer"
                                to='/auth/signin'
                            >
                                Sign in
                            </Anchor>
                        </p>
                    </div>
                    :
                    <div className="w-4/5 h-[25vh] text-left p-2">
                        <p className="text-gray-400">step 2 of 2</p>
                        <h3 className="text-[24px] font-bold">Create account</h3>
                        <p className="mt-5">Already have an account?{" "}
                            <Anchor
                                className="text-[18px] text-blue-500 font-bold cursor-pointer"
                                to='/auth/signin'
                            >
                                Sign in
                            </Anchor>
                        </p>
                    </div>
            }

            <form className={(step == 0 ? "h-[30vh]" : "h-[40vh]") + " flex flex-col w-full p-2 bg-white mb-1.5"}>
                <div className={step == 0 ? "flex flex-col w-full items-center justify-center" : "hidden"}>
                    <input
                        ref={mail}
                        type="mail"
                        className="w-4/5 py-3 text-left border-b-2 border-gray-400"
                        name="mail"
                        id="mail"
                        defaultValue=""
                        placeholder="Email"
                    />
                    <input
                        ref={password}
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
                        onClick={() => setStep(1)}
                    />
                </div>
                <div className={step != 0 ? "flex flex-col w-full items-center justify-center" : "hidden"}>
                    <div className="flex w-4/5 m-0 p-0 justify-between gap-2">
                        <input
                            ref={name}
                            type="text"
                            className="w-3/5 py-3 text-left border-b-2 border-gray-40"
                            name="name"
                            id="name"
                            defaultValue=""
                            placeholder="Name"
                        />
                        <input
                            ref={lastName}
                            type="text"
                            className="w-3/5 py-3 text-left border-b-2 border-gray-40"
                            name="lastName"
                            id="lastName"
                            defaultValue=""
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        ref={photo}
                        type="text"
                        className="w-4/5 py-3 text-left border-b-2 border-gray-40"
                        name="photo"
                        id="photo"
                        defaultValue=""
                        placeholder="Photo"
                    />
                    <div className="flex justify-start mt-7 items-center gap-5">
                        <label htmlFor="country" className="text-gray-400">Country / region</label>
                        <select ref={country} name="country" className="w-[10vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                countries.map((c, i) => {
                                    return <option key={i} value={c}>{c}</option>
                                })
                            }
                        </select>
                    </div>
                    <input
                        type="button"
                        className="bg-primary text-white w-1/5 me-4 mt-16 py-2 text-center cursor-pointer self-end rounded"
                        value="Continue"
                        onClick={() => func()}
                    />
                </div>
            </form>
        </article>
    )
}