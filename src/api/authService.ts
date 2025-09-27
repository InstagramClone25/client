import type { TLoginResponse } from '@/types/auth';
import type { User } from '@/types/user';

import api from './axios';

export const authService = {
  login: (email: string, password: string) =>
    api.post<TLoginResponse>('/api/auth/login', { email, password }),
  loginWithGoogle: (access_token: string) =>
    api.post<TLoginResponse>('/api/auth/google-login', { access_token }),
  register: (data: { name: string; email: string; password: string }) =>
    api.post<{ message: string }>('/api/auth/register', data),
  refreshToken: () => api.get<{ accessToken: string }>('/api/auth/refresh-token'),
  profile: () => api.get<{ profileInfo: User }>(`/api/auth/profile`),
  logout: () => api.get<{ message: string }>(`/api/auth/logout`),
};
