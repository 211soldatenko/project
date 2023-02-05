import {
  AppBar,
  Toolbar,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import navConfig from './nav/config-navigation'
import NavDesktop from './nav/desktop'
import NavMobile from './nav/mobile'

export default function Header() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          [theme.breakpoints.up('md')]: {
            height: 115,
          },
        }}
      >
        <Container>
          {!isDesktop && <NavMobile data={navConfig} />}
          {isDesktop && <NavDesktop data={navConfig} />}
        </Container>
      </Toolbar>
    </AppBar>
  )
}
