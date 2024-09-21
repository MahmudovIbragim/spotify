import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import ReduxProvider from './providers/ReduxProvider.tsx';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);