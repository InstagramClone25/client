import api from './axios';

export const userService = {
  getProfile: () => api.get('/user/profile'),
  login: (data: { email: string; password: string }) => api.post('/auth/login', data),
};
