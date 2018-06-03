import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/'
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';

export default  axiosInstance;
