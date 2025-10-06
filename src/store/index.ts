import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import postReducer from './slices/postSlice';
import socketReducer from './slices/socketSlice';
import toastReducer from './slices/toastSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    toasts: toastReducer,
    socket: socketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
