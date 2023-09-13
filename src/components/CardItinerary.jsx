import CardActivity from "./CardActivitiy"
import { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Like from "./Like";
import Money from "./Money";
import User from "./User";
import axios from "axios";
import apiUrl from "../apiUrl";
import { useSelector, useDispatch } from "react-redux";
import activities_actions from "../store/actions/activities";
const { read_activities_from_itinerary } = activities_actions

export default function CardItinerary({ text, src, alt, price, duration, tags, id, admin }) {
    let [change, setChange] = useState(false);
    let [counter, setCounter] = useState(0);
    let [like, setLike] = useState(false);
    let [show, setShow] = useState(false);
    const [activities, setActivities] = useState();

    //const activities = useSelector(store => store.activities.activities_from_itinerary)

    const dispatch = useDispatch()

    const fillActivities = () => {
        axios(apiUrl + 'activities?itinerary_id=' + id)
            .then(res => setActivities(res.data.response))
            .catch(err => {
                setActivities([])
                console.log(err)
            })
        /* let activitiesStore =  useSelector(store => store.activities.activities_from_itinerary)
        setActivities(activitiesStore) */     
    }

    useEffect(
        () => {
            fillActivities()
            /* dispatch(read_activities_from_itinerary({ itinerary_id: id })) */
        }, []
    )

    return (
        <div className="w-full flex flex-col items-center p-2 my-5 bg-white text-black rounded md:w-[60vw] lg:w-[40vw]">
            <p className="text-[18px] font-bold py-1">{text}</p>
            <img className="w-[100vw] h-[25vh] sm:w-[85vw] sm:h-[30vh] md:w-[70vw] md:h-[35vh] lg:w-[55vw] lg:h-[40vh]" src={src} alt={alt} />
            <div className="w-full flex justify-between px-2 my-2 text-black">
                <div className="flex">
                    <Like touch={like} onClick={() => setLike(!like)} />
                    <p>{counter}</p>
                </div>
                <Arrow direction={change ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} onClick={() => setChange(!change)} size="w-[25px] h-[25px] lg:w-[50px]" />
            </div>
            {
                change &&
                <>
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
                                <td><User data={admin} /></td>
                                <td><div className="flex-col flex-wrap overflow-wrap: break-all">{tags}</div></td>
                                <td>{duration} hs</td>
                                <td><Money price={price} /></td>
                            </tr>
                        </tbody>
                    </table>

                    <span onClick={() => setShow(!show)} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 mb-2 rounded cursor-pointer w-[150px] text-center">{show ? ("hide") : ("view more")}</span>
                    {
                        show &&
                        <div className="w-full flex flex-wrap items-center justify-evenly">
                            {activities?.map((e, i) => (
                                <CardActivity key={i} text={e.name} src={e.photo} id={e._id} />
                            ))}
                        </div>
                    }
                </>
            }
        </div>
    )
}