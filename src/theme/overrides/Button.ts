import { Theme } from '@mui/material/styles'
import { ButtonProps } from '@mui/material'

export default function Button(theme: Theme) {
  const rootStyle = (ownerState: ButtonProps) => {
    const isOutlinedVariant = ownerState.variant === 'outlined'
    const isContainedVariant = ownerState.variant === 'contained'

    const isPrimary = ownerState.color === 'primary'
    const isSecondary = ownerState.color === 'secondary'

    const fontStyle = {
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1,
      letterSpacing: '0.06em',
    }

    const size = {
      padding: '24px 75px',
    }

    const color = {
      ...(isPrimary && {
        ...(isOutlinedVariant && {
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': {
            color: '#fff',
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main,
          },
        }),
        ...(isContainedVariant && {
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': {
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: 'transparent',
          },
          '&.Mui-disabled': {
            color: theme.palette.grey[500],
            backgroundColor: theme.palette.primary.dark,
            border: `2px solid ${theme.palette.primary.dark}`,
          },
        }),
      }),
      ...(isSecondary && {
        ...(isOutlinedVariant && {
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.grey[400]}`,
          '&:hover': {
            color: '#fff',
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[400],
          },
        }),
        ...(isContainedVariant && {
          border: `1px solid ${theme.palette.grey[400]}`,
          backgroundColor: theme.palette.grey[400],
          '&:hover': {
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: 'transparent',
          },
          '&.Mui-disabled': {
            color: theme.palette.grey[500],
            backgroundColor: theme.palette.grey[200],
            border: `1px solid ${theme.palette.grey[200]}`,
          },
        }),
      }),
    }

    return [fontStyle, size, color]
  }

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyle(ownerState),
      },
    },
  }
}
