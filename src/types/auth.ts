import type { User } from '@/types/user';

export type TLoginResponse = {
  accessToken: string;
  user: User;
};
