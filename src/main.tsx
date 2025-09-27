import '@/index.css';
import '@/i18n'; // Cấu hình i18n

import { GoogleOAuthProvider } from '@react-oauth/google';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App.tsx';
import { setupAxios } from '@/lib/setupAxios';
import { store } from '@/store';

const CLIENT_ID = '833594066954-6uccjnu8bdt2ad7igf7hf7knnot2n8sg.apps.googleusercontent.com';
setupAxios(store);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
