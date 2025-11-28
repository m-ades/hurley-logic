import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `"IBM Plex Sans", sans-serif`,
  },
  palette: {
    background: { default: "#f6f7fa" },
    primary: {
      main: '#2f6bff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"IBM Plex Sans", sans-serif',
        },
        '.material-symbols-outlined': {
          fontFamily: 'Material Symbols Outlined',
        },
        '[class*="material-symbols"]': {
          fontFamily: 'Material Symbols Outlined',
        },
      },
    },
  },
});

export default theme;
