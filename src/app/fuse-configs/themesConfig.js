import { fuseDark, skyBlue } from '@fuse/colors';
import { lightBlue, red } from '@mui/material/colors';

const lightText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
};

const darkText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(229, 231, 235)',
  disabled: 'rgb(156, 163, 175)',
};

const themesConfig = {
  default: {
    palette: {
      mode: 'light',
      text: lightText,
      common: {
        black: 'rgb(17, 24, 39)',
        white: 'rgb(255, 255, 255)',
      },
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: '#FFFFFF',
        default: '#f6f7f9',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  defaultDark: {
    palette: {
      mode: 'dark',
      text: darkText,
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: '#1E2125',
        default: '#121212',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  light9: {
    palette: {
      mode: 'light',
      text: lightText,
      primary: {
        light: '#7bb5e2', // F77C7C #D3C0CD
        main: '#3490d9', //  F75252 #6B2C57
        dark: '#1261a0', //  D92925 #3C102C
      },
      secondary: {
        light: '#FDEAC9',
        main: '#F9B84B',
        dark: '#F59123',
        contrastText: '#1E1F23',
      },
      background: {
        paper: '#FFFFFF',
        default: '#FAFAFE',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
};

export default themesConfig;
