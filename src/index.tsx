import React from 'react';
import { createRoot } from 'react-dom/client';
import graphQLFetcher from './api/fetchGraphQL';
import App from './App';
import AuthenticationService from './auth/AuthenticationService';
import environment from './RelayEnvironment';
import reportWebVitals from './reportWebVitals';

const authService = new AuthenticationService();
const fetchGraphQL = graphQLFetcher(authService);

const relayEnv = environment(fetchGraphQL, authService);

const container = document.getElementById('root');

// Use createRoot to enable React concurrent mode
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

authService.login().then(() => {
  root.render(
    <React.StrictMode>
      <App authService={authService} environment={relayEnv} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
