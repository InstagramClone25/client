import { createSlice } from '@reduxjs/toolkit';

type TToast = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
};

const initialState: TToast[] = [];

const toastSlice = createSlice({
  name: 'Toast',
  initialState,
  reducers: {
    add(state, { payload }: { payload: TToast }) {
      state.push(payload);
    },
    remove(state, { payload }: { payload: any }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export type { TToast };
export const { add, remove } = toastSlice.actions;
export default toastSlice.reducer;
