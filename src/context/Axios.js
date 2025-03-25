import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://your-server-ip-or-domain/api/',  // Change this to your server URL
    withCredentials: true, // Allow sending cookies (like JWT token) with requests
});

export default axiosInstance;