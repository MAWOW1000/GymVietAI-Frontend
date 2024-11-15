import axios from 'axios';


const postLogin = (email, password) => {
    const data = {
        valueLogin: email ? email : null,
        password: password ? password : null,
    }
    return axios.post('http://localhost:8080/api/v1/login', data)
}

const getLoginGoogle = () => {
    return axios.post('http://localhost:8080/auth/google')
}

export { postLogin, getLoginGoogle }
