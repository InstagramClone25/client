import { type LoaderFunctionArgs, redirect } from 'react-router-dom';

import useToast from '@/hooks/useToast';
import { store } from '@/store';

export const requiredAuth = (_: LoaderFunctionArgs) => {
  const { access_token } = store.getState().auth;
  const { showToast } = useToast();

  if (!access_token) {
    showToast({ message: 'Vui lòng đăng nhập để tiếp tục truy cập!', type: 'warning' });

    return redirect('/login');
  }

  return { mesage: 'xin chao' };
};
