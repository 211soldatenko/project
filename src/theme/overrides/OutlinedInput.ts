import { Theme } from '@mui/material'

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontWeight: 500,
          fontSize: '0.875rem',
          lineHeight: 1.15,
          padding: 0,

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[50],
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        },

        input: {
          padding: '22px 24px',
        },

        notchedOutline: {
          padding: '0 20px',
          borderColor: theme.palette.grey[500],
        },
      },
    },
  }
}
