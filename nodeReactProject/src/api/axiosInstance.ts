import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7777/api', // Adjust the base URL as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

axiosInstance.interceptors.request.use(
  (config) => {
    // Request interceptor logic if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to log all response data
axiosInstance.interceptors.response.use(
  (response) => {
    // Log the response data
    console.log('API Response:', response.data);
    return response;
  },
  (error) => {
    // Log errors
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);