import { createTheme } from '@mui/material/styles';

import { colorSchema } from '@/utils/constraints';

const fontFamily = "'Patrick Hand', 'Carlito', sans-serif";
export const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colorSchema.orange,
    },
    secondary: {
      main: colorSchema.purple,
    },
    background: {
      default: '#fef9f2',
    },
    info: {
      main: '#3d5afe',
    },
    text: {
      secondary: 'rgba(243,243,243,0.85)',
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily,
    h4: {
      fontFamily: 'Caveat',
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontSize: '1em',
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1em',
    },
  },
});

export default theme;
