import { Navigate, useRoutes } from 'react-router-dom';
import { urls } from './urls';
import Home from '../pages/navigator/home';
import AppLayout from '../layout/app/AppLayout';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        // default Routes
        {
          path: '',
          element: <Navigate to={urls.home.url} replace />,
        },
        // Navigator Routes
        {
          path: urls.navigator.path,
          // element: <NavigatorLayout />,
          children: [
            { path: '', element: <Navigate to={urls.home.url} replace /> },
            {
              path: urls.home.path,
              element: <Home />,
            },
            { path: '*', element: <Navigate to={urls.error.url} replace /> },
          ],
        },
        // other
        { path: '*', element: <Navigate to={urls.error.url} replace /> },
      ],
    },
  ]);
}
