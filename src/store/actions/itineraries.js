import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_itineraries_from_city = createAsyncThunk(
    "read_itineraries_from_city",
    async (obj) => {
        try {
            let data = await axios(apiUrl + 'itineraries?city_id=' + obj.city_id);
            //console.log(data);
            return { itineraries_from_city: data.data.response };
        } catch (error) {
            //console.log(error);
            return { itineraries_from_city: [] };
        }
    }
);

const count_like = createAsyncThunk("count_like", async (obj) => {
    try {
        let data = await axios(apiUrl + "itineraries?city_id=" + obj.id);
        //console.log(data);
        const initial_state = {
            likes : 0,
            isLiked : false
        }
        return { user: data.data.response };
      } catch (error) {
        console.log(error);
        return { user: {} };
      }
});

const itinerary_actions = { read_itineraries_from_city };
export default itinerary_actions;
