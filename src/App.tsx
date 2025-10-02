import { RouterProvider } from 'react-router-dom';

import Toast from '@/components/toast/Toast';
import { ThemeProvider } from '@/context/ThemeProvider';
import useSocket from '@/hooks/useSocket';
import { router } from '@/routers';

function App() {
  useSocket();

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
