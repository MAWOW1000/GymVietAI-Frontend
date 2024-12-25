import axios from './axiosCustomize';

export const postChat = (message) => {
    return axios.post('/chat', { message });
}
