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
        <div className="w-[80vw] mt-[200px] flex flex-col justify-between items-center mx-auto
            lg:flex-row">
            <article className="flex-col w-[80vw] ms-auto self-center
                lg:w-1/4">
                <h2 className="text-[24px] font-bold">Find the perfect destination</h2>
                <p className="mt-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <input onClick={() => setShow(!show)} type="button" value={show ? "Hide" : "View More"} className="w-[200px] text-white font-bold py-2 px-4 my-3 rounded" style={{ backgroundColor: '#4F46E5' }} />
            </article>
            <article className="w-[80vw] mx-auto mt-[100px] items-center self-center
                lg:w-1/2 lg:flex-row lg:mt-[0px]">
                {show ? <Carousel data={data} /> : <h1 className="text-[24px] text-white hidden sm:flex"></h1>}
            </article>
        </div>
    )
}