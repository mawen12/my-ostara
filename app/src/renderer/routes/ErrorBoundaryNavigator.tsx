import { useNavigate } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
import { useEffect } from 'react';
import { urls } from './urls';

type ErrorBoundaryNavigatorProps = {};

export default function ErrorBoundaryNavigator({}: ErrorBoundaryNavigatorProps) {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  useEffect(() => {
    resetBoundary();
    navigate(urls.error.url);
  }, []);

  return null;
}
