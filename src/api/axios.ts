import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const TIMEOUT = 10000;

const api = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
