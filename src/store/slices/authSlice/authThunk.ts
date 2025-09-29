import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService } from '@/api/authService';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.login(email, password);
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
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (dataRegister: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.register(dataRegister);
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('register failed');
    }
  }
);

export const getProfile = createAsyncThunk('auth/profile', async (_, thunkAPI) => {
  try {
    const { data } = await authService.profile();
    return data;
  } catch (_error) {
    return thunkAPI.rejectWithValue('fetch profile failed');
  }
});

export const refreshToken = createAsyncThunk('auth/refresh-token', async (_, thunkAPI) => {
  try {
    const { data } = await authService.refreshToken();
    return data;
  } catch (_error) {
    return thunkAPI.rejectWithValue('refresh token failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await authService.logout();
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});
