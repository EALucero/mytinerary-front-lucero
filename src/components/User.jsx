/* import { useSelector } from "react-redux" */

export default function User({ data }) {
    /* const user = useSelector(store => store.users.user)
    console.log(user); */
    return (
        <div className="flex flex-col items-center">
            <img src={data.photo} key={data._id} className="bg-white w-[80px] h-[80px] object-cover rounded-full"></img>
            <h2>{data.name}</h2><br/>
        </div>
    )
}