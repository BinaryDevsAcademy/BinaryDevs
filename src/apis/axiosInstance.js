import axios from "axios";

export const BASE = 'http://localhost:8080/api'

export const SAVE_CONTACT = async(data) => {
    const response = await axios.post(`${BASE}/user/contact-us`, data)
    console.log(response)
    return response
}