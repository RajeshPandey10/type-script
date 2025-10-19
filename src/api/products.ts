import axios from "axios"
import config from "../config/config"

export const getAll =async()=>{
    const response = axios.get(`${config.apiUrl}/products`)
    return response
}

