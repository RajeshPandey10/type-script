import axios from "axios";
import type { LoginFormType } from "../types/LoginFormType";
import config from "../config/config";

export const login =async(data:LoginFormType)=>{
 const response=await axios.post(`${config.apiUrl}/api/auth/login`,data)
 return response
}

export const Register =async(data:LoginFormType)=>{
 const response=await axios.post(`${config.apiUrl}/api/auth/register`,data)
 return response
}