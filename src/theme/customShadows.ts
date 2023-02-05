import { alpha } from '@mui/material/styles'
import palette from './palette'

interface CustomShadowOptions {
  z4: string
  z20: string
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions
  }
}

const themeColor = palette()

function createShadow(color: string) {
  const transparent = alpha(color, 0.05)

  return {
    z4: `0px 4px 60px ${alpha('#a1a1a1', 0.25)}`,
    z20: `20px 20px 40px ${transparent}`,
  }
}

export default function customShadows() {
  // @ts-ignore
  return createShadow(themeColor.text.primary)
}
