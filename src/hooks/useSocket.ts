import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import socket from '@/lib/socket';
import type { RootState } from '@/store';
import { addMessage, setConnected } from '@/store/slices/socketSlice';

const useSocket = () => {
  const dispatch = useDispatch();

  const { access_token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (access_token) {
      socket.auth = { token: access_token };
      socket.connect();

      socket.on('connect', () => {
        dispatch(setConnected(true));
      });

      socket.on('disconnect', () => {
        dispatch(setConnected(false));
      });

      socket.on('message', (data) => {
        dispatch(addMessage(data));
      });
    } else {
      if (socket.connected) {
        socket.disconnect();
        dispatch(setConnected(false));
      }
    }

    return () => {
      if (socket.connected) {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('message');
        socket.disconnect();
      }
    };
  }, [access_token]);
};

export default useSocket;
