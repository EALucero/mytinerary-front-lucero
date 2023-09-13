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

const signup = createAsyncThunk(
    'signup',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/register', obj.data)
            console.log(data)
            return {
                user: data.data.response,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signin', obj.data)
            //console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'token',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/token', null, authorization)
            console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/signout', null, authorization)
            console.log(data)
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const update_user = createAsyncThunk(
    'update_user',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.put(apiUrl + 'users', obj.data, authorization)
            console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
            }
        }
    }
)

const user_actions = { read_users, signup, signin, signin_token, signout, update_user };
export default user_actions;