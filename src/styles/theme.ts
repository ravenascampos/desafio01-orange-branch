'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '4rem',
      fontWeight: '900',
      lineHeight: '75px',
    },
    h2: {
      fontSize: '2.625rem',
      fontWeight: '900',
      lineHeight: '49.22px',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '900',
      lineHeight: '49.22px',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '28.13px',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '700',
      lineHeight: '23.44px',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: '700',
      lineHeight: '21.09px',
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '21.09px',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '18.75px',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '18.75px',
      opacity: '60%',
    },
  },
  palette: {
    primary: { main: '#DC6400' },
    secondary: { main: '#536471' },
    grey: { '100': '#5C6C79' },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F9F9',
    },
    error: { main: '#EF1C5C' },
    info: { main: '#1DA1F2' },
    success: { main: '#0CB245' },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primaryContained' },
          style: {
            backgroundColor: '#DC6400',
            color: '#FFFFFF',
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#DC6400',
              border: '1px solid #DC6400',
            },
            '&:disabled': {
              opacity: '40%',
              color: '#FFFFFF',
            },
          },
        },
        {
          props: { variant: 'secondaryContained' },
          style: {
            backgroundColor: '#000000',
            color: '#FFFFFF',
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: '1px solid #000000',
            },
            '&:disabled': {
              opacity: '40%',
              color: '#FFFFFF',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #00000066',
            borderRadius: '50px',
            color: '#000000',
            '&:hover': {
              color: '#DC6400',
              border: '1px solid #DC6400',
            },
          },
        },
        {
          props: { variant: 'outlinedIcon' },
          style: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #00000066',
            borderRadius: '50px',
            color: '#000000',
            '&:hover': {
              color: '#DC6400',
              border: '1px solid #DC6400',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: '#1DA1F2',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1DA1F2',
        },
      },
    },
    MuiMenuList: {
      variants: [
        {
          props: { variant: 'menu' },
          style: {},
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'currentColor',
        },
      },
    },
    MuiTabs: {
      variants: [
        {
          props: { variant: 'custonTab' },
          style: {
            borderBottom: '1px solid #C4C4C4 !important',
            '& .MuiTab-root': {
              color: '#000000',
              backgroundColor: '#FFFFFF',
              fontWeight: '400',
            },
            '& .Mui-selected': {
              color: '#000000 !important',
              fontWeight: '700',
            },
          },
        },
      ],
      styleOverrides: {
        indicator: {
          backgroundColor: '#1DA1F2',
          height: '4px',
          borderRadius: '50px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#000000',
          },
          '& focus': {
            color: '#DC6400',
          },
          '& .Mui-error': {
            color: '#EF1C5C',
            borderColor: '#EF1C5C',
          },
        },
      },
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            color: '#5C6C79',
            backgroundColor: '#EFF3F4',
            borderRadius: '30px',
            fontSize: '1.125rem',
            '.Mui-focused': {
              border: '2px solid #DC6400',
              borderRadius: '30px',
            },
            '.MuiInputBase-root': {
              backgroundColor: 'transparent',
              alignItems: 'baseline',
              '&:: before, &:: after': {
                borderBottom: 'none !important',
              },
              '&:hover, &::selection': {
                backgroundColor: 'transparent',
              },
              '.MuiInputBase-input': {
                padding: '15px 12px !important',
              },
            },
          },
        },
      ],
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primaryContained: true;
    secondaryContained: true;
    outlinedIcon: true;
  }
}

declare module '@mui/material/Tabs' {
  interface TabsPropsVariantOverrides {
    custonTab: true;
  }
}

export default theme;
