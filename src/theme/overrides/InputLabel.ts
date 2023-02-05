import { InputLabelProps, Theme } from '@mui/material'

export default function InputLabel(theme: Theme) {
  const rootStyle = (ownerState: InputLabelProps) => {
    const isOutlinedVariant = ownerState.variant === 'outlined'

    const fontStyle = {
      ...(isOutlinedVariant && {
        color: '#fff',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.15,
      }),
    }

    const positionStyle = {
      ...(isOutlinedVariant && {
        top: '8px',
        left: '12px',
      }),
    }

    return [fontStyle, positionStyle]
  }

  const shrinkStyle = (ownerState: InputLabelProps) => {
    const isOutlinedVariant = ownerState.variant === 'outlined'

    const transformStyle = {
      ...(isOutlinedVariant && {
        transform: 'translate(12px, -14px) scale(0.75)',
      }),
    }

    return [transformStyle]
  }

  return {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: InputLabelProps }) =>
          rootStyle(ownerState),

        shrink: ({ ownerState }: { ownerState: InputLabelProps }) =>
          shrinkStyle(ownerState),
      },
    },
  }
}
