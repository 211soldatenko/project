import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
//
import typography from './typography'
import GlobalStyles from './globalStyles'
import palette from './palette'
import componentsOverride from './overrides'
import customShadows from './customShadows'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(),
      typography,
      customShadows: customShadows(),
      zIndex: {
        appBar: 1600,
      },
    }),
    [],
  )

  const theme = createTheme(themeOptions)

  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
