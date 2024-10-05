import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import ReduxProvider from './providers/ReduxProvider.tsx';
import React from 'react';
import { SearchProvider } from './providers/SearchContext.tsx';
import { ColorProvider } from './providers/BgColorContext.tsx';
import { BackgroundColorProvider } from './providers/BgProfileColorContext.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <SearchProvider>
        <ColorProvider>
          <BackgroundColorProvider>
            <App />
          </BackgroundColorProvider>
        </ColorProvider>
      </SearchProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
