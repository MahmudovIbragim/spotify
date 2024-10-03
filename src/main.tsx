import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import ReduxProvider from './providers/ReduxProvider.tsx';
import React from 'react';
import { SearchProvider } from './providers/SearchContext.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
