import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import DetailCity from "../components/DetailCity";

export default function CityDetail() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);

  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, []);

  //console.log(city.admin_id);

  return (
    <div className="w-[full] mt-[4.3vh] flex flex-col justify-between items-center mx-auto 
    lg: flex-row">
      <DetailCity src={city.photo} alt={city_id} text={[city.city, city.smallDescription]} id={city_id} admin={city.admin_id} />
    </div>)
}