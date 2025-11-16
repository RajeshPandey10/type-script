import { type AxiosResponse } from "axios";

import type { loginFormType, registerFormType } from "../types/authFormType";
import api from "./interceptors";
const AUTH_TOKEN = "authToken" //this is the professional way to write the more than two constants in js to avoid mistakes

export const login = async (data: loginFormType): Promise<AxiosResponse> => {

    const response = await api.post(`/auth/login`, data)
    if (response.data.token) {
        localStorage.setItem(AUTH_TOKEN, response.data.token)
    }
    console.log(response.data.token)
    return response


}
// export const isAuth = () => {
//     const token = localStorage.getItem(AUTH_TOKEN)

//     return !!token        //!! means not not means not affecting the things just converting string to the boolean
// }

// export const logout = () => {
//     localStorage.removeItem(AUTH_TOKEN)

// }




export const Register = async (data: registerFormType) => {
    const response = await api.post(`/auth/register`, data)
    return response
}