import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ISocketState {
  isConnected: boolean;
  messages: string[];
}

const initialState: ISocketState = {
  isConnected: false,
  messages: [],
};

const socketSlice = createSlice({
  name: 'socket',
  initialState, // ✅ sửa ở đây
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setConnected, addMessage } = socketSlice.actions;
export default socketSlice.reducer;
