import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/AppLayout';
import { loginRedirect } from '@/routers/loaders/loginRedirect';
import { requiredAuth } from '@/routers/loaders/requireAuth';

const About = lazy(() => import('@/pages/About'));
const Login = lazy(() => import('@/pages/Login'));
const LoginQuick = lazy(() => import('@/pages/LoginQuick'));
const Register = lazy(() => import('@/pages/Register'));
const Main = lazy(() => import('@/pages/Main'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/about',
        element: <About />,
        loader: requiredAuth,
      },
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginRedirect,
  },
  {
    path: '/login-quick',
    element: <LoginQuick />,
    loader: loginRedirect,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
