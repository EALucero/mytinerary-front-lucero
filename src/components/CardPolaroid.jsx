import { Link as Anchor } from "react-router-dom";

export default function CardPolaroid({ src, alt, text, id }) {
    return (
        <Anchor to={'/cities/' + id} className="flex flex-col items-center p-2 m-2 bg-black text-white rounded
            lg:w-5/12">
            <img className="h-[25vh] lg:h-[15vh]" src={src} alt={alt} />
            <p className="text-[16px] pt-1 text-white">{text}</p>
        </Anchor>
    )
}