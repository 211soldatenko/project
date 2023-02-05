import { Theme } from '@mui/material/styles'

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },

        positionFixed: {
          position: 'fixed',
          top: 'auto',
          right: 'auto',
          bottom: 0,
          left: 0,

          [theme.breakpoints.up('md')]: {
            position: 'absolute',
            top: 0,
            right: 'auto',
            bottom: 'auto',
            left: 0,
          },
        },

        colorPrimary: {
          backgroundColor: theme.palette.grey[700],

          [theme.breakpoints.up('md')]: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  }
}
