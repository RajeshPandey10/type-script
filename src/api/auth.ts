import axios, { type AxiosResponse } from "axios";
import config from "../config/config";
import type { loginFormType, registerFormType } from "../types/authFormType";
const AUTH_TOKEN = "authToken" //this is the professional way to write the more than two constants in js to avoid mistakes

export const login = async (data: loginFormType): Promise<AxiosResponse> => {

    const response = await axios.post(`${config.apiUrl}/api/auth/login`, data)
    if (response.data.token) {
        localStorage.setItem(AUTH_TOKEN, response.data.token)
    }
    return response


}
export const isAuth = () => {
    const token = localStorage.getItem(AUTH_TOKEN)

    return !!token        //!! means not not means not affecting the things just converting string to the boolean
}

export const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)

}




export const Register = async (data: registerFormType) => {
    const response = await axios.post(`${config.apiUrl}/api/auth/register`, data)
    return response
}