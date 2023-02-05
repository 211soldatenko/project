import { Theme } from '@mui/material'

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
          },
        },
      },
    },
  }
}
