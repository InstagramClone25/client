import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import {
  getProfile,
  login,
  loginWithGoogle,
  logout,
  refreshToken,
  register,
} from '@/store/slices/authSlice/authThunk';
import type { User } from '@/types/user';

interface UserState {
  user: User | null;
  access_token: string | null;
  message: string | null;
  loading: boolean;
  error: string | null;
}

const initialAuth: UserState = {
  user: null,
  access_token: localStorage.getItem('access_token'),
  message: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.access_token = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.access_token = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    });

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.access_token = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.access_token = null;
      state.user = null;
      localStorage.removeItem('access_token');
    });

    builder.addCase(logout.rejected, (state, _action) => {
      state.access_token = null;
      state.user = null;
      localStorage.removeItem('access_token');
    });

    builder
      .addMatcher(isPending(loginWithGoogle, register, login, getProfile, logout), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(loginWithGoogle, register, login, getProfile, logout), (state) => {
        state.loading = false;
      })
      .addMatcher(
        isRejected(loginWithGoogle, register, login, getProfile, logout),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export default authSlice.reducer;
