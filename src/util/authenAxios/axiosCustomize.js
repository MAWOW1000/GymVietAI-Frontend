import axios from "axios";
import qs from 'qs';
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8083/api/v1',
    withCredentials: true,
    timeout: 5000, // 5 second timeout
});

// Alter defaults after instance has been created


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.withCredentials = true;
    // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    // if (config.data && config.headers[config.method]['Content-Type'] === 'application/x-www-form-urlencoded') {
    // config.data = qs.stringify(config.data)
    config.headers = { 'content-type': 'application/x-www-form-urlencoded' };
    config.data = qs.stringify(config.data);  // Use qs.stringify for POST data if needed
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) return response.data
    return response;
}, function (error) {
    // Handle timeout error
    if (error.code === 'ECONNABORTED') {
        return {
            EM: 'Request timeout - Please try again later',
            EC: -1,
            DT: null
        };
    }
    
    // Handle other errors
    if (error?.response?.data) return error?.response?.data;
    return {
        EM: 'System error occurred',
        EC: -1,
        DT: null
    };
});

export default instance;