import React from 'react';
import Router from './components/routes/Router.js';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeOptions } from './Theme.js';

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;