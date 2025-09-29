import type { User } from '@/types/user';

import api from './axios';

export const userService = {
  getUsers: () => api.get<{ users: User[] }>('/api/users'),
};
