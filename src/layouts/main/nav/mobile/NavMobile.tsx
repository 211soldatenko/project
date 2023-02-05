import {
  Stack,
  ListItemButton,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Logo from '../../../../components/logo/Logo'
import { INavConfig } from '../types'

interface NavProps {
  data: INavConfig[]
}

export default function NavMobile({ data }: NavProps) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleToggleDrawer = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Logo />
      <IconButton onClick={handleToggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: theme.palette.grey[700],
          },
        }}
      >
        <Box role="presentation" onClick={handleDrawerClose}>
          <List disablePadding>
            {data.map(({ id, title, hash }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component="a"
                  href={hash}
                  divider
                  sx={{ color: '#fff' }}
                >
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Stack>
  )
}
