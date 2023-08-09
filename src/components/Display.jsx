import { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
    return (
        <div className="flex ms-5 absolute top-[70px] left-[70px] gap-2 flex flex-col bg-pink-400 p-5 rounded-xl">
            {options.map(e => <Anchor key={e.to} to={e.to} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] text-center mx-1">{e.title}</Anchor>)}
        </div>
    )
}
