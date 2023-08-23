import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import apiUrl from '../apiUrl'

export default function CityDetail() {
  const { id } = useParams()
  const [city, setCity] = useState([])

  useEffect(() => {
    axios(apiUrl + 'cities/' + id)
      .then(res => setCity(res.data.response))
      .catch(err => console.log(err))
  }, [])

  console.log(city);

  return (
    <div className="w-[full] mt-[4.3vh] flex flex-col justify-between items-center mx-auto 
    lg: flex-row">
      <img src={city.photo} alt={id} />
      <article className="w-[50vw] text-center">
        <h1 className="mt-[20px] text-[24px] font-bold">{city.city}</h1>
        <p>{city.smallDescription}</p>
        <input type="button" value="Itineraries" className="w-[120px] text-white font-bold py-2 px-4 my-5 rounded" style={{ backgroundColor: '#4F46E5' }} />
      </article>

    </div>)
}
