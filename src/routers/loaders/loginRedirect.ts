import { redirect } from 'react-router-dom';

import { store } from '@/store';

export const loginRedirect = () => {
  const { access_token } = store.getState().auth;

  if (access_token) {
    return redirect('/');
  }

  return null;
};
