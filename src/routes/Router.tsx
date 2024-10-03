import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import SearchPage from '../components/pages/SearchPage';
import GenrePage from '../components/pages/GenrePage';
import TypesPage from '../components/pages/TypesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/search/:params?',
        element: <SearchPage />,
      },
      {
        path: '/search/:params?/:type?',
        element: <TypesPage />,
      },
      {
        path: '/genre/:id/:color',
        element: <GenrePage />,
      },
    ],
  },
]);

export default router;
