import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";

export default function Home() {
    const [show, setShow] = useState();
    const [data, setData] = useState([]);
    const name1 = 'My';
    const name2 = 'Tinerary';

    useEffect(() => {
        axios('/data.json')
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="grow flex flex-col items-center mt-[20px]">
            <h2 className="text-[25px] font-extrabold">{`${name1} ${name2}`}</h2>
            <input onClick={() => setShow(!show)} type="button" value={show ? "hide" : "show"} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" />
            {show ? <Carousel data={data} /> : <h1 className="text-[24px] text-white">click arriba para ver el carousel</h1>}
            <button className="bg-indigo-500 rounded text-white p-1" style={{backgroundColor: '#4F46E5'}}>Login</button>
        </main>
    )
}