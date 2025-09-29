import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import toastReducer from './slices/toastSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    toasts: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
