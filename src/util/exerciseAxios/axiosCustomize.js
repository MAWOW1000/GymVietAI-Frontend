import axios from "axios";
import qs from 'qs';
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8082/api/v1/exercise',
    withCredentials: true
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
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data) return error?.response?.data;
    return Promise.reject(error);
});

export default instance