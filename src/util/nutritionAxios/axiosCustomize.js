import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/nutrition',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Log full request details
    console.log('Full Request Config:', {
        url: config.url,
        method: config.method,
        headers: config.headers,
        data: config.data
    });
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Log full response details
    console.log('Full Response:', {
        status: response.status,
        headers: response.headers,
        data: response.data
    });
    if (response && response.data) return response.data;
    return response;
}, function (error) {
    // Log error details
    console.error('Response Error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers,
        data: error.response?.data
    });
    if (error?.response?.data) return error?.response?.data;
    return Promise.reject(error);
});

export default instance;