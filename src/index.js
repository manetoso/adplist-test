import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import theme from './chackraExtended';
import { OnMeetContextProvider } from './context/onMeetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qtbw9wbp.us.auth0.com"
    clientId="aZubaRQVxCUiEjbxEFZMg4HTq1PlgonP"
    redirectUri={window.location.origin}
  >
    <ChakraProvider theme={theme}>
      <OnMeetContextProvider>
        <App />
      </OnMeetContextProvider>
    </ChakraProvider>
  </Auth0Provider>
);
