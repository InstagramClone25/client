import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import Toast from '@/components/toast/Toast';
import useSocket from '@/hooks/useSocket';
import { router } from '@/routers';

function App() {
  useSocket();

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'black') || 'light';
    console.log({ savedTheme });

    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  );
}

export default App;
