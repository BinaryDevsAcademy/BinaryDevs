import axios from "axios";
import { BASE } from "../../../apis/axiosInstance";
import { getAuthData } from "../../../data/indexedDB";

const getTokens = async() => {
    const indexDB = await getAuthData()
    console.log(indexDB)
    return indexDB
}

export const LOGIN_USER = async(data) => {
    const response = await axios.post(`${BASE}/admin/login`, data)
    console.log(response)
    return response
}

export const GET_LEADS = async() => {
    const data = await getTokens()
    console.log(data.accessToken)
    const response = await axios.get(`${BASE}/admin/leads`, {headers:{
        'Authorization': `Bearer ${data.accessToken}`
    }})
    console.log(response)
}