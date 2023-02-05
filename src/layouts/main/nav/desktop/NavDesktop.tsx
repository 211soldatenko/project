import { Stack, IconButton, useTheme, Link } from '@mui/material'
import Logo from '../../../../components/logo/Logo'
import navConfig from '../config-navigation'
import { INavConfig } from '../types'

interface NavProps {
  data: INavConfig[]
}

export default function NavDesktop({ data }: NavProps) {
  const theme = useTheme()

  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <Logo />

      <Stack
        component="nav"
        direction="row"
        sx={{
          flexWrap: 'wrap',
          mx: 4.5,
        }}
      >
        {navConfig.map(({ id, title, hash }) => (
          <Link
            key={id}
            href={hash}
            underline="none"
            sx={{
              fontWeight: 500,
              fontSize: '0.75rem',
              lineHeight: 1.8,
              opacity: 0.8,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#fff',
              borderTop: `3px solid transparent`,
              borderBottom: `3px solid transparent`,
              mx: 3,

              '&:hover': {
                borderBottom: `3px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            {title}
          </Link>
        ))}
      </Stack>

      <Link
        underline="none"
        color="white"
        href="tel:+88002222673"
        sx={{ ml: 'auto', flexShrink: 0 }}
      >
        8 800 222-26-73
      </Link>

      <IconButton
        size="medium"
        sx={{
          fontWeight: 700,
          fontSize: '0.875rem',
          lineHeight: 1,
          color: '#fff',
          ml: 4.75,
        }}
      >
        RU
      </IconButton>
    </Stack>
  )
}
