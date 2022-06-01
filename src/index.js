import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import theme from './chackraExtended';
import { OnMeetContextProvider } from './context/onMeetContext';

const { REACT_APP_AUTH0_DOMAIN: DOMAIN, REACT_APP_AUTH0_CLIENT_ID: CLIENT_ID } =
  process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <ChakraProvider theme={theme}>
      <OnMeetContextProvider>
        <App />
      </OnMeetContextProvider>
    </ChakraProvider>
  </Auth0Provider>
);
