import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel"

export default function Hero() {
    const [show, setShow] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('/data.json')
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="w-3/4 mt-[100px] flex justify-between items-center mx-auto">
            <article className="flex-col w-1/3">
                <h2 className="text-3xl font-bold">Find the perfect destination</h2>
                <p className="mt-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <input onClick={() => setShow(!show)} type="button" value={show ? "Hide" : "View More"} className="w-[246px] text-white font-bold py-2 px-4 my-3 rounded" style={{ backgroundColor: '#4F46E5' }} />
            </article>
            <article className="flex-col w-1/4 items-center">
                {show && <Carousel data={data} />}
            </article>
        </div>
    )
}