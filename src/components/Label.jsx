/* import { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
    return (
        <div className="w-[354px] h-[64px] ms-5 gap-2 p-2 rounded justify-center hidden 
            md:flex ">
            {options.map(e => <Anchor key={e.to} to={e.to} className="h-[32px] text-[24px] px-2 bg-white rounded w-[100px] flex justify-center items-center self-center mx-1" style={{backgroundColor: e.backgroundColor, color: e.color, height: e.height}}>{e.title}</Anchor>)}
        </div>
        
    )
} */

import { Link as Anchor } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Label({ options }) {
    let photo = useSelector((store) => store.users.user?.photo);
    return (
        <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
            {options.map((each) =>
                each.to
                    ? each.show &&
                    (each.to === "/auth/signin" ? (
                        <Anchor
                            key={each.to}
                            to={each.to}
                            className="h-[50px] text-[20px] text-white px-2 bg-primary hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1"
                        >
                            {each.title}
                        </Anchor>
                    ) : (
                        <Anchor
                            key={each.to}
                            to={each.to}
                            className="h-[50px] text-[20px] px-2 bg-white hover:bg-hover rounded-xl w-[100px] flex justify-center items-center mx-1"
                        >
                            {each.title}
                        </Anchor>
                    ))
                    : each.show && (
                        <span
                            key={each.title}
                            onClick={each.onClick}
                            className="h-[50px] text-[20px] text-white px-2 bg-primary hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
                        >
                            {each.title}
                        </span>
                    )
            )}
            {photo && (
                <img
                    src={photo}
                    className="h-[50px] w-[50px] object-cover bg-white rounded-xl mx-1 hidden lg:flex"
                />
            )}
        </div>
    )
}