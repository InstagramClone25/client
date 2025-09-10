import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
