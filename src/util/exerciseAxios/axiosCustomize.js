import axios from "axios";
import qs from 'qs';
import { postLogout } from '../authenAxios/authenApi';
import { navigate } from '../../services/navigation';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8082/api/v1/exercise',
    withCredentials: true,
    timeout: 5000 // 5 second timeout
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    config.withCredentials = true;
    config.headers = { 'content-type': 'application/x-www-form-urlencoded' };
    config.data = qs.stringify(config.data);
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    if (response && response.data) return response.data;
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