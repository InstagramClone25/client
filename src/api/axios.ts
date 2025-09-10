// src/api/axios.ts
import axios from 'axios';
const API_URL = process.env.API_URL;

console.log('API_URL:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage (nếu có)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response.data, // Trả về trực tiếp dữ liệu
  (error) => {
    if (error.response?.status === 401) {
      // Ví dụ: token hết hạn → logout
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
