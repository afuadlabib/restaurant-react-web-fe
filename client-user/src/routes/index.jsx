import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import LandingPage from '../pages/LandingPage';
import DetailPage from '../pages/DetailPage';

export const router = createBrowserRouter([
  {
    element: <BaseLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
      },
      // {
      //   path: '/category',
      //   element: 'Layout',
      // },
      {
        path: '/items/:itemId',
        element: <DetailPage />,
      },
    ],
  },
]);
