import { TypographyOptions } from '@mui/material/styles/createTypography'

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number
  md: number
  lg: number
}) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  }
}

export function pxToRem(value: number) {
  return `${value / 16}rem`
}

const FONT_PRIMARY = 'Montserrat, sans-serif'

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  h2: {
    fontWeight: 700,
    lineHeight: 1.22,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 32, md: 36, lg: 42 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.22,
    fontSize: pxToRem(18),
  },
  body1: {
    fontWeight: 500,
    lineHeight: 1.4,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 500,
    lineHeight: 1.45,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 18, lg: 18 }),
  },
}

export default typography
