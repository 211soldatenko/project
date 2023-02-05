import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Footer from './Footer'
import Header from './Header'

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  )
}
