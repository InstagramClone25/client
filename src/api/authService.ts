import type { TLoginResponse } from '@/types/auth';
import type { User } from '@/types/user';

import api from './axios';

export const authService = {
  login: (email: string, password: string) =>
    api.post<TLoginResponse>('/api/auth/login', { email, password }),
  loginWithGoogle: (access_token: string) =>
    api.post<TLoginResponse>('/api/auth/google-login', { access_token }),
  register: (data: { name: string; email: string; password: string }) =>
    api.post<User>('/api/auth/register', { data }),
};
