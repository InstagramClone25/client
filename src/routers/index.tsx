import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { loginRedirect } from '@/routers/loaders/loginRedirect';
import { requiredAuth } from '@/routers/loaders/requireAuth';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: requiredAuth,
      },
      {
        path: '/about',
        element: <About />,
        loader: requiredAuth,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginRedirect,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
