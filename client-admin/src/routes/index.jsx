import { createBrowserRouter, redirect } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashBoardPage';
import CategoryPage from '../pages/CategoryPage';
import RegisterAdminPage from '../pages/RegisterAdminPage';
import AddCategoryPage from '../pages/AddCategoryPage';
import AddItemPage from '../pages/AddItemPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '/',
        element: <DashBoardPage />,
      },
      {
        path: '/categories',
        element: <CategoryPage />,
      },
      {
        path: '/add-category',
        element: <AddCategoryPage />,
      },
      {
        path: '/register-admin',
        element: <RegisterAdminPage />,
      },
      {
        path: '/add-item',
        element: <AddItemPage />,
      },
      {
        path: '/categories/:categoryId',
        element: <AddCategoryPage />,
      },
      {
        path: '/items/:itemId',
        element: <AddItemPage />,
      },
    ],
  },
  {
    path: '/login',
    loader: () => {
      if (localStorage.access_token) {
        throw redirect(!'/login');
      }
      return null;
    },
    element: <LoginPage />,
  },
]);
