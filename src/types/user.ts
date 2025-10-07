export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  verified: boolean;
  location: string;
  avatar: string;
  role: 'user' | 'admin';
  provider: 'local' | 'google';
  createdAt: string;
  updatedAt: string;
}
