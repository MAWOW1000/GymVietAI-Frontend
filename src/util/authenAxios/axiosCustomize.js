import axios from "axios";
import qs from 'qs';
import { postLogout } from './authenApi';
import { navigate } from '../../services/navigation';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8083/api/v1',
    withCredentials: true,
    timeout: 10000, // 5 second timeout
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
    console.log('Response from Axios:', response);
    return response;
}, async function (error) {
    // Handle unauthorized or forbidden errors (401/403)
    // if (error?.response?.status === 401 || error?.response?.status === 403) {
    //     try {
    //         // Call logout API
    //         await postLogout();
    //         // Clear any auth data from localStorage
    //         localStorage.clear();
    //         // Navigate to login page using our navigation service
    //         navigate('/login');
    //     } catch (logoutError) {
    //         console.error('Logout failed:', logoutError);
    //         // Force navigate to login even if logout API fails
    //         navigate('/login');
    //     }
    //     return Promise.reject(error);
    // }

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