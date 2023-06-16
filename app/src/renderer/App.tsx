import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import useCreateQueryClient from './apis/useCreateQueryClient';
import './App.css';
import Router from './routes/routes';
import NiceModal from '@ebay/nice-modal-react';
import { ItemsProvider } from './contexts/ItemsContext';

export default function App() {
  const queryClient = useCreateQueryClient();

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ItemsProvider>
          <NiceModal.Provider>
            <Router />
          </NiceModal.Provider>
        </ItemsProvider>
      </QueryClientProvider>
    </MemoryRouter>
  );
}
