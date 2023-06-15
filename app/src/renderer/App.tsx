import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import useCreateQueryClient from './apis/useCreateQueryClient';
import './App.css';
import Router from './routes/routes';

export default function App() {
  const queryClient = useCreateQueryClient();

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </MemoryRouter>
  );
}
