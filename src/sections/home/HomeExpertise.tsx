import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import SectionRoot from '../../components/section-root'
import { expertiseData } from './homeConfig'

const StyledSectionRoot = styled(SectionRoot)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(43.75, 0, 0, 0),
  background:
    'linear-gradient(254.72deg,#ffffff46 -114.85%,#fff0 69.04%), #040613;',

  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'url(/images/home/expertise_bg.png) top right no-repeat',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(50, 0, 21, 0),
  },
}))

const StyledBg = styled('div')(({ theme }) => ({
  width: '85%',
  maxWidth: theme.spacing(94),
  marginTop: -6,

  [theme.breakpoints.up('md')]: {
    marginTop: -7.5,
  },

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    marginTop: 0,
  },
}))

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  transform: 'translateY(18%)',
}))

export default function HomeExpertise() {
  const theme = useTheme()

  return (
    <StyledSectionRoot id="expertise">
      <Container>
        <Box sx={{ width: { md: '50%' }, ml: { md: '50%' } }}>
          <Typography color="white" variant="h2" sx={{ mb: { xs: 3, md: 7 } }}>
            Экспертиза в Drupal, опыт 14 лет!
          </Typography>

          <Grid container spacing={3}>
            {expertiseData.map(({ body }, idx) => (
              <Grid key={idx} item xs={12} sm={6}>
                <Box
                  sx={{
                    height: '100%',
                    minHeight: theme.spacing(10),
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Box sx={{ padding: theme.spacing(0.25, 1) }}>
                    <Typography color="white" sx={{ opacity: '0.7' }}>
                      {body}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <StyledBg aria-hidden={true}>
        <StyledImage
          src="/images/home/expertise_laptop.png"
          width="660"
          height="522"
          alt="img"
        />
      </StyledBg>
    </StyledSectionRoot>
  )
}
