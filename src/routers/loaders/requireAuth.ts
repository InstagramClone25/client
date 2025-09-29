import { type LoaderFunctionArgs, redirect } from 'react-router-dom';

import { store } from '@/store';

export const requiredAuth = ({ request }: LoaderFunctionArgs) => {
  const { access_token } = store.getState().auth;

  if (!access_token && request.url.split('?')[1]?.includes('logout')) {
    return redirect('/login');
  }

  if (!access_token) {
    return redirect('/login?required=true');
  }

  return { mesage: 'xin chao' };
};
