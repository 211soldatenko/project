import { styled } from '@mui/material'

const SectionRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(6.25, 0, 3.75, 0),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12.5, 0, 7.5, 0),
  },
}))

export default SectionRoot
