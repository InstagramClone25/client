import type { User } from '@/types/user';

import api from './axios';

export const userService = {
  getUsers: () => api.get<User[]>('/api/users'),
};
