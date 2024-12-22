import axios from './axiosCustomize';

const postRegister = (email, password, otp) => {
    const URL_API = "/register";
    const data = {
        email,
        password,
        otp
    }
    return axios.post(URL_API, data)
}

const postLogin = (email, password) => {
    const URL_API = "/login";
    const data = {
        email, password
    }

    return axios.post(URL_API, data)
}

const postLoginGoogle = (accessToken) => {
    const URL_API = "/loginGoogle";
    const data = {
        accessToken
    }

    return axios.post(URL_API, data)
}

const postLogout = () => {
    const URL_API = "/logout";
    return axios.post(URL_API)
}

const sendOTP = (email) => {
    const URL_API = "/sendOTP";
    return axios.post(URL_API, { email });
}

const resetPassword = (email, otp, newPassword) => {
    const URL_API = "/resetPassword";
    return axios.post(URL_API, { email, otp, newPassword });
}

export { postRegister, postLogin, postLoginGoogle, postLogout, sendOTP, resetPassword }