import { useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_carousel } = city_actions

export default function Hero() {
    const carousel = useSelector(store => store.cities.carousel)
    const dispatch = useDispatch();

    useEffect(
        () => {
            if (carousel.length === 0) {
                dispatch(read_carousel())
            }
        }, []
    )

    return (
        <div className="w-[80vw] mt-[100px] flex flex-col justify-between items-center mx-auto
            lg:flex-row">
            <article className="flex-col w-[80vw] ms-auto self-center
                lg:w-1/4">
                <h2 className="text-[24px] font-bold">Find the perfect destination</h2>
                <p className="my-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Anchor to="/cities" className="w-[200px] text-white font-bold py-2 px-4 rounded cursor-pointer shadow focus:shadow-outline focus:outline-none" style={{ backgroundColor: '#4F46E5' }}>View more</Anchor>
            </article>
            <article className="w-[80vw] mx-auto mt-[100px] items-center self-center
                lg:w-1/2 lg:flex-row lg:mt-[0px]">
                <Carousel data={carousel} />
            </article>
        </div>
    )
}