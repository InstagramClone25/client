import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { getUsers } from '@/store/slices/userSlice/userThunk';
import type { User } from '@/types/user';

interface UserState {
  items: User[];
  loading: boolean;
  error: string | null;
}

const initState: UserState = {
  items: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(action);

      state.items = action.payload.map((user) => ({
        ...user,
        createdAt: new Date(user.createdAt).toLocaleDateString('vi-VN'),
        updatedAt: new Date(user.updatedAt).toLocaleDateString('vi-VN'),
      }));
      state.loading = false;
      state.error = null;
    });

    builder
      .addMatcher(isPending(getUsers), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(getUsers), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(getUsers), (state, action) => {
        state.loading = false;
        state.error = action.payload! as string;
      });
  },
});

export default userSlice.reducer;
