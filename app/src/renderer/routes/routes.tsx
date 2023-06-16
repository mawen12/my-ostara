import { Navigate, useRoutes } from 'react-router-dom';
import { urls } from './urls';
import Home from '../pages/navigator/home';
import AppLayout from '../layout/app/AppLayout';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryNavigator from './ErrorBoundaryNavigator';
import NavigatorLayout from '../layout/navigator/NavigatorLayout';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <ErrorBoundary FallbackComponent={ErrorBoundaryNavigator}>
          <AppLayout />
        </ErrorBoundary>
      ),
      children: [
        // default Routes
        { path: '', element: <Navigate to={urls.navigator.url} replace />, },
        // Navigator Routes
        {
          path: urls.navigator.path,
          element: <NavigatorLayout />,
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
