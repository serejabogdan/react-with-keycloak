// outsource
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';

// local
import AppRoot from './pages';
import { keycloak } from './keycloak.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <AppRoot/>
    </ReactKeycloakProvider>
  </React.StrictMode>
);
