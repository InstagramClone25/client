import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService } from '@/api/authService';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.login(email, password);
      console.log(data);
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (access_token: string, thunkAPI) => {
    try {
      const { data } = await authService.loginWithGoogle(access_token);
      console.log(data);
      return data;
    } catch (_error) {
      // Sửa thông báo lỗi cho phù hợp
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (dataRegister: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.register(dataRegister);
      console.log(data);
      return data;
    } catch (_error) {
      // Sửa thông báo lỗi cho phù hợp
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);
