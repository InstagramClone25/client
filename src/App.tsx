import { RouterProvider } from 'react-router-dom';

import Toast from '@/components/toast/Toast';
import { ThemeProvider } from '@/context/ThemeProvider';
import useSocket from '@/hooks/useSocket';
import { router } from '@/routers';

function App() {
  useSocket();

  return (
    <ThemeProvider>
      <div className="relative mx-auto flex h-dvh w-[425px] max-w-dvw flex-col">
        <RouterProvider router={router} />
        <Toast />
      </div>
    </ThemeProvider>
  );
}

export default App;
