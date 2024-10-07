import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import SearchPage from '../components/pages/SearchPage';
import GenrePage from '../components/pages/GenrePage';
import TypesPage from '../components/pages/TypesPage';
import ArtistPage from '../components/pages/ArtistPage';
import ProfilPage from '../components/pages/ProfilPage';

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
        path: '/profile',
        element: <ProfilPage />,
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
      {
        path: '/artist/:id',
        element: <ArtistPage />,
      },
    ],
  },
]);

export default router;
