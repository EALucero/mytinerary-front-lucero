import { Link as Anchor } from "react-router-dom";

export default function CardActivity({ text, src, id }) {
    return (
        <Anchor to={'/activities/' + id} className="w-[60vw] h-[20vh] flex flex-col items-center p-2 m-2 bg-black text-white rounded
            sm:w-5/12 lg:w-[12vw] lg:h-[15vh] lg:mx-1">
            <img className="w-full h-[15vh] lg:h-[12vh]" src={src} alt="img" />
            <p className="h-[2vh] text-[16px] pb-1 text-white">{text}</p>
        </Anchor>
    )
}