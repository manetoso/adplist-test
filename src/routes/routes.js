import { Login, Home } from '../pages';

export const routes = [
  {
    to: '/login',
    path: 'login',
    Component: Login,
    requireAuth: false,
    label: 'Login',
  },
  {
    to: '/',
    path: '/',
    Component: Home,
    requireAuth: true,
    label: 'Home',
  },
];
