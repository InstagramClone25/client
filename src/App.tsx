import { RouterProvider } from 'react-router-dom';

import { ToastManager } from '@/components/commons/ToastManager';
import { router } from '@/routers';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastManager />
    </>
  );
}

export default App;
