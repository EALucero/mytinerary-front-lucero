import { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
    return (
        <div className="hidden md:flex w-[354px] h-[64px] ms-5 gap-2 p-2 rounded justify-center">
            {options.map(e => <Anchor key={e.to} to={e.to} className="h-[32px] text-[24px] px-2 bg-white rounded w-[100px] flex justify-center items-center self-center mx-1" style={{backgroundColor: e.backgroundColor, color: e.color, height: e.height}}>{e.title}</Anchor>)}
        </div>
    )
}
