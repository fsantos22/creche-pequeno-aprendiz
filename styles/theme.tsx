import { createTheme } from '@mui/material/styles';

const fontFamily = "'Patrick Hand', 'Carlito', sans-serif";
export const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#EB5D30',
    },
    secondary: {
      main: '#7e57c2',
    },
    background: {
      default: '#fef9f2',
      primary: '#EB5D30',
      secondary: '#7e57c2'
      // paper: '#56509f',
    },
    info: {
      main: '#3d5afe',
    },
    text: {
      secondary: 'rgba(243,243,243,0.85)',
    },
    button: {
      primary: '#EB5D30',
      secondary: '#7e57c2'
    }
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily,
    h4: {
      fontFamily: "Caveat",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: '1em'
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: '1em'
    },
    // fontSize,
  },
});

export default theme;
