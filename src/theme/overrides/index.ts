import { Theme } from '@mui/material/styles'
import AppBar from './AppBar'
//
import Button from './Button'
import Container from './Container'
import Drawer from './Drawer'
import InputLabel from './InputLabel'
import OutlinedInput from './OutlinedInput'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Container(theme),
    InputLabel(theme),
    OutlinedInput(theme),
    AppBar(theme),
    Drawer(theme),
  )
}
