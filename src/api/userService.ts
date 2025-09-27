import type { User } from '@/types/user';

import api from './axios';

export const userService = {
  getUsers: () => api.get<{ users: User[] }>('/api/users'),
  test1: () => api.get<{ data: string }>('/api/test1'),
  test2: () => api.get<{ data: string }>('/api/test2'),
};
