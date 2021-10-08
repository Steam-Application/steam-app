export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#1e2020',
      light: '#1e2020',
      dark: '#1e2020',
    },
    secondary: {
      main: '#552ea4',
      light: '#552ea4',
      dark: '#552ea4',
    },
    error: {
      main: '#f44336',
      light: '#f44336',
      dark: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 5
      }
    }
  }
};