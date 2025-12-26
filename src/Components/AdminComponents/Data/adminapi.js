import axios from "axios";
import { BASE } from "../../../apis/axiosInstance";

export const LOGINUSER = async(data) => {
    const response = await axios.post(`${BASE}\admin\login`, data)
    console.log(response)
}