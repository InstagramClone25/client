import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { userService } from '@/api/userService';
import type { User } from '@/types/user';

export const getUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'user/getUsers',
  async (_, thunkAPI) => {
    try {
      // call api get users
      const { data } = await userService.getUsers();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch users: ' + error);
    }
  }
);

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
        state.error = action.payload!;
      });
  },
});

export default userSlice.reducer;
