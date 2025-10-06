import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import { loginRedirect } from '@/routers/loaders/loginRedirect';
import { requiredAuth } from '@/routers/loaders/requireAuth';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Login = lazy(() => import('@/pages/Login'));
const LoginQuick = lazy(() => import('@/pages/LoginQuick'));
const Register = lazy(() => import('@/pages/Register'));

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
    path: '/login-quick',
    element: <LoginQuick />,
    loader: loginRedirect,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
