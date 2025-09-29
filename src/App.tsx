import { RouterProvider } from 'react-router-dom';

import Toast from '@/components/toast/Toast';
import { router } from '@/routers';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  );
}

export default App;
