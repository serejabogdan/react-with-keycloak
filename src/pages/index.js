// outsource
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

// local

function AppRoot () {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  keycloak.init({ onLoad: 'login-required', checkLoginIframe: false }).success((data) => console.log('success', data));

  console.log(isLoggedIn);
  return <div className="App">
    It is App
  </div>;
}

export default AppRoot;
