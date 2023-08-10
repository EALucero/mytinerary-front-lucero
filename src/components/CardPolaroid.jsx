import { Link as Anchor } from "react-router-dom";

export default function CardPolaroid({ src, alt, text, id }) {
    return (
        <Anchor to={'/city/'+id} className="flex flex-col items-center p-2 m-2 bg-black text-white rounded
            lg:w-5/12">
            <img src={src} alt={alt} />
            <p className="text-[20px]">{text}</p>
        </Anchor>
    )
}