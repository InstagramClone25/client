import { createAsyncThunk } from '@reduxjs/toolkit';

import { userService } from '@/api/userService';

export const getUsers = createAsyncThunk('user/getUsers', async (_, thunkAPI) => {
  try {
    // call api get users
    const res = await userService.getUsers();
    console.log(res.data.users);

    return res.data.users;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch users: ' + error);
  }
});
