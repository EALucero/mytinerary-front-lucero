import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, id }) {
    return (
        <div className="w-[full] flex flex-col items-start p-2 m-2 bg-black rounded
        lg:w-[19vw]">
            <img className="h-[25vh] lg:h-[20vh]" src={src} alt={alt} />
            <p className="text-[20px] text-white font-bold ms-2 absolute font-outline-1">{text[0]}</p>
            <div className="flex text-[16px] text-white font-bold ms-1 font-outline-1 my-7 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mt-0.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p>{text[1]}</p>
            </div>     
            <Anchor to={id} className="w-[90px] text-[14px] absolute text-white text-center py-1 px-2 mt-48 ml-1 rounded lg:mt-36 lg:ml-2 xl:mt-28" style={{ backgroundColor: '#4F46E5' }}>View More</Anchor>   
        </div>
        
    )
}