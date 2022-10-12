import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import teal from '@mui/material/colors/teal';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';
import AuthenticationService from './auth/AuthenticationService';
import UserContext from './auth/UserContext';
import ErrorBoundary from './ErrorBoundary';
import AppHeader from './nav/AppHeader';
import AppRoutes from './routes/AppRoutes';

interface Props {
  authService: AuthenticationService
  environment: any
}

// TODO: In a future story this will be configurable via settings
const mode = 'dark' as any

const theme = createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? teal[300] : teal[500]
    },
    secondary: {
      main: '#29b6f6'
    },
    info: {
      main: 'rgba(255,255,255,0.7)'
    }
  }
});

function App(props: Props) {
  // Add dismiss action to all snackbars
  const notistackRef = React.createRef<SnackbarProvider>();
  const onClickDismiss = (key: any) => () => {
    notistackRef.current?.closeSnackbar(key);
  }

  return (
    <BrowserRouter>
      <RelayEnvironmentProvider environment={props.environment}>
        <UserContext.Provider value={props.authService.getCurrentUser()}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              ref={notistackRef}
              action={(key) => (
                <Button onClick={onClickDismiss(key)} color="inherit">
                  Dismiss
                </Button>
              )}
            >
              <CssBaseline />
              <AppHeader authService={props.authService} />
              <Box marginTop="65px">
                <ErrorBoundary>
                  <Suspense fallback={<Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CircularProgress />
                  </Box>}>
                    <AppRoutes authService={props.authService} />
                  </Suspense>
                </ErrorBoundary>
              </Box>
            </SnackbarProvider>
          </ThemeProvider>
        </UserContext.Provider>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  );
}

export default App;
