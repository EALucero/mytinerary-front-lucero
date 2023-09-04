import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_users = createAsyncThunk(
    'read_users',
    async () => {
        try {
            let users = await axios.get(apiUrl + 'users')
            console.log(users);
            return {
                users: users.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }
    }
)

const read_user = createAsyncThunk("read_user", async (obj) => {
    try {
      let data = await axios(apiUrl + "users/" + obj.id);
      //console.log(data);
      return { user: data.data.response };
    } catch (error) {
      console.log(error);
      return { user: {} };
    }
});

const user_actions = { read_users, read_user };
export default user_actions;