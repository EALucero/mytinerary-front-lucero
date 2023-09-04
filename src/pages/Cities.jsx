import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);

  function handleFilter() {
    setReEffect(!reEffect);
  }

  console.log(cities);

  return (
    <main className="grow flex items-center">
      <img className="w-full h-[50vh] absolute top-[0px]" src="/img/backgroundSign.jpg" alt="" />
      <div className="w-[80vw] mt-[40vh] flex flex-col justify-between items-center mx-auto">
        <article className="w-[80vw] absolute top-[20vh] mx-auto text-center text-white font-bold font-outline-2
                lg:w-1/3 lg:flex-row lg:mt-[0px]">
          <h1 className="text-[36px]">Cities</h1>
          <h2 className="text-[27px]">Collection of the most beautiful places and experiences</h2>
        </article>
        <input className="w-[340px] my-10 p-2 pl-10 rounded-full bg-black lg:w-[680px] text-white" ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} placeholder="🔍 Search your city" />
        <article className="w-[full] flex flex-col flex-wrap justify-center mt-5
          lg:flex-row lg:mt-[0px]">
          {cities.map((e) => (
            <CardCity key={e._id} src={e.photo} alt={e._id} text={[e.city, e.country]} id={e._id} />
          ))}
        </article>
      </div>
    </main>
  )
}