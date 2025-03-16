import axios from "axios";
import { postLogout } from '../authenAxios/authenApi';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3004/api/payment',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    if (response && response.data) return response.data;
    return response;
}, async function (error) {
    if (error.code === 'ECONNABORTED') {
        return {
            success: false,
            message: 'Request timeout - Please try again later'
        };
    }

    if (error?.response?.data) return error?.response?.data;
    return {
        success: false,
        message: 'System error occurred'
    };
});

export default instance;
