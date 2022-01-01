import React from 'react';
import Router from './components/routes/Router.js';
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeOptions } from './Theme.js';

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={4} hideIconVariant preventDuplicate>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;