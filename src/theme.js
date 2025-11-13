import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `"IBM Plex Sans", sans-serif`,
  },
  palette: {
    background: { default: "#fafafa" },
    primary: {
      main: '#8155ba',
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

