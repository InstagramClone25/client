import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import Toast from '@/components/toast/Toast';
import { ThemeProvider } from '@/context/ThemeProvider';
import useSocket from '@/hooks/useSocket';
import { router } from '@/routers';

function App() {
  useSocket();

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const setDataTheme = (matches: boolean) => {
      const savedTheme = matches ? 'black' : 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    };

    colorScheme.addEventListener('change', ({ matches }) => setDataTheme(matches));
    setDataTheme(colorScheme.matches);
  }, []);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
