import { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
    return (
        <div className="flex ms-5 absolute top-[100px] left-[5px] gap-2 flex flex-col bg-blue-400 p-3 rounded-xl
        md:hidden">
            {options.map(e => <Anchor key={e.to} to={e.to} className="h-[40px] text-[20px] p-1 bg-white rounded-xl w-[100px] text-center mx-1">{e.title}</Anchor>)}
        </div>
    )
}
