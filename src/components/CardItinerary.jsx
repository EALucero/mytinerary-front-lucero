import { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Like from "./Like";
import Money from "./Money";
import User from "./User";
/* import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { read_user } = user_actions */

export default function CardItinerary({ text, src, alt, price, duration, tags, id, admin }) {
    let [change, setChange] = useState(false);
    let [counter, setCounter] = useState(0);
    let [like, setLike] = useState(false);

    /* const dispatch = useDispatch();

    useEffect(
        () => {dispatch(read_user())},
        []
    ) */

    console.log(admin);
    

    return (
        <div className="w-full flex flex-col items-center p-2 my-5 bg-white text-black rounded md:w-[60vw] lg:w-[40vw]">
            <p className="text-[18px] font-bold py-1">{text}</p>
            <img className="w-[100vw] h-[25vh] sm:w-[85vw] sm:h-[30vh] md:w-[70vw] md:h-[35vh] lg:w-[55vw] lg:h-[40vh]" src={src} alt={alt} />
            <div className="w-full flex justify-between px-2 my-2 text-black">
                <Like touch={like} counter={counter} onClick={() => setLike(!like) && counter == 0 ? setCounter(counter + 1) : setCounter(counter - 1)} />
                <Arrow direction={change ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} onClick={() => setChange(!change)} size="w-[25px] h-[25px] lg:w-[50px]" />
            </div>
            {
                change &&
                <table className="w-full">
                    <thead>
                        <tr className="justify-between col-auto">
                            <th>User:</th>
                            <th>Hashtags:</th>
                            <th>Duration:</th>
                            <th>Price:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><User data={admin}/></td>
                            <td>{tags}</td>
                            <td>{duration} min</td>
                            <td><Money price={price} /></td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

{/* <div className="w-[full] flex flex-col items-start p-2 m-2 bg-white rounded
        lg:w-[19vw]">
            <p className="text-[20px] text-white font-bold ms-2 absolute font-outline-1">{text}</p>
            <img className="h-[25vh] w-full lg:h-[20vh]" src={src} alt={alt} />
            <div className="flex text-[16px] text-white font-bold ms-1 font-outline-1 my-7 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mt-0.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p>{text[1]}</p>
            </div>     
            <Anchor to={id} className="w-[90px] text-[14px] absolute text-white text-center py-1 px-2 mt-48 ml-1 rounded lg:mt-36 lg:ml-2 xl:mt-28" style={{ backgroundColor: '#4F46E5' }}>View More</Anchor>   
        </div> */}