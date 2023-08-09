import { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
    return (
        <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
            {options.map(e => <Anchor key={e.to} to={e.to} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1" style={{backgroundColor: e.backgroundColor, color: e.color}}>{e.title}</Anchor>)}
        </div>
    )
}
