import { PaletteOptions } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string
  }
  interface SimplePaletteColorOptions {
    lighter: string
    darker: string
  }
  interface PaletteColor {
    lighter: string
    darker: string
  }
}

const PRIMARY = {
  lighter: '#fcdbd6',
  light: '#f79485',
  main: '#f14d34',
  dark: '#912e1f',
  darker: '#300f0a',
  contrastText: '#fff',
}

const MAIN_BLACK = {
  lighter: '#cdced6',
  light: '#696d85',
  main: '#050c33',
  dark: '#03071f',
  darker: '#01020a',
  contrastText: '#fff',
}

export default function palette(): PaletteOptions {
  return {
    mode: 'light',
    primary: PRIMARY,
    text: {
      primary: MAIN_BLACK.main,
      secondary: MAIN_BLACK.light,
    },
  }
}
