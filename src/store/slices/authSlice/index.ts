import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { login, loginWithGoogle, register } from '@/store/slices/authSlice/authThunk';
import type { User } from '@/types/user';

interface UserState {
  user: User | null;
  access_token: string | null;
  loading: boolean;
  error: string | null;
}

const initialAuth: UserState = {
  user: null,
  access_token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.accessToken;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.accessToken;
    });

    builder
      .addMatcher(isPending(loginWithGoogle, register, login), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(loginWithGoogle, register, login), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(loginWithGoogle, register, login), (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
