import { Theme } from '@mui/material/styles'

export default function Drawer(theme: Theme) {
  return {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorBottom: {
          bottom: 56,
          [theme.breakpoints.up('xs')]: {
            '@media (orientation: landscape)': {
              bottom: 48,
            },
          },
          [theme.breakpoints.up('sm')]: {
            bottom: 64,
          },
        },
      },
    },
  }
}
