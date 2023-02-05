import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Logo() {
  const logo = (
    <Box
      component="img"
      src="/logo/logo.svg"
      sx={{ width: 137, height: 20, cursor: 'pointer' }}
    />
  )
  return (
    <Link component={RouterLink} to="/">
      {logo}
    </Link>
  )
}
