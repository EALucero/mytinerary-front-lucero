import CardItinerary from "./CardItinerary";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import itinerary_actions from "../store/actions/itineraries"
const { read_itineraries_from_city } = itinerary_actions

export default function DetailCity({ src, alt, text, id, admin }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(read_itineraries_from_city({ city_id: id }))
    }, []
  )

  return (
    <div className="w-[full] mt-[4.3vh] flex flex-col justify-between items-center">
      <img src={src} alt={alt} />
      <article className="w-[80vw] text-center">
        <h2 className="text-[24px] font-bold my-5">{text[0]}</h2>
        <p className="mb-10">{text[1]}</p>
        {
          itineraries.length > 0 ?
            <span onClick={() => setShow(!show)} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-[150px] text-center">{show ? ("hide") : ("itineraries")}</span>
            : <h2 className="text-[24px] text-black">No hay itinerarios aun para esta ciudad</h2>
        }
        {
          show &&
          <div className="w-[full] flex flex-col flex-wrap items-center mt-5">
            {itineraries.map((e, i) => (
              <CardItinerary key={i} text={e.name} src={e.photo} alt={e._id} price={e.price} duration={e.duration} tags={e.tags} id={e._id} admin={admin} />
            ))}
          </div>
        }
      </article>
    </div>
  );
}

{/* <Anchor to={'/city/' + id} className="w-[300px] md:w-4/5 flex flex-col items-center p-2 m-2 bg-white">
<img src={src} alt={alt} />
<p className="text-[20px]">{text}</p>

</Anchor> */}