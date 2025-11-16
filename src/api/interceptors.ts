import config from "../config/config";
import axios from "axios"

const api = axios.create({
    baseURL: `${config.apiUrl}`,
    withCredentials: true,
    timeout:10000
})

// Request interceptor to add Authorization header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api