import { LocalStore } from './storage.js';
import axios from 'axios';

const { get } = LocalStore

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((config) => {
        const accessToken = get('access_token', true)
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error))

export default axiosInstance
