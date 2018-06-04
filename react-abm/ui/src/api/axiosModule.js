import axios from "axios";
import { API_ROOT } from "../config/config";

const axiosInstance = axios.create({
    baseURL: API_ROOT
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';

export default  axiosInstance;
