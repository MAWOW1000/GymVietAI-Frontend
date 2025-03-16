import axios from './axiosCustomize';

export const getSubscriptionPlans = () => {
    return axios.get('/plans');
}

export const createPayment = (userId, planId) => {
    return axios.post('/create', {
        userId,
        planId
    });
}

export const validatePayment = (params) => {
    return axios.post('/validatePayment', { params });
}

export const getOrders = (params) => {
    return axios.get('/orders', { params });
}

export const createOrder = (data) => {
    return axios.post('/orders', data);
}

export const updateOrder = (orderId, data) => {
    return axios.put(`/orders/${orderId}`, data);
}

export const deleteOrder = (orderId) => {
    return axios.delete(`/orders/${orderId}`);
}
