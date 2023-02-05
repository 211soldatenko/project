import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { heroData } from './homeConfig'

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(5, 0, 7.5, 0),
  background: 'url(/icons/home/druplicon.svg) top left no-repeat',
  backgroundSize: 'contain',
  backgroundColor: alpha(theme.palette.common.black, 0.8),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(21.25, 0, 7.5, 0),
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(18.75, 0),
    backgroundSize: 'auto',
  },
}))

const StyledVideoBg = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -10,
}))

export default function HomeHero() {
  const theme = useTheme()

  return (
    <StyledRoot id="hero">
      <StyledVideoBg autoPlay loop muted poster="/images/home/hero_image.png">
        <source src="/video/home/hero_video.mp4" type="video/mp4" />
      </StyledVideoBg>

      <Container>
        <Grid
          container
          spacing={{ xs: 6.875, sm: 10, md: 3 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid item xs={12} md={6}>
            <Stack sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h2" color="white" sx={{ mb: 2 }}>
                Поддержка сайтов <br /> на&nbsp;Drupal
              </Typography>

              <Typography
                variant="body2"
                color="white"
                sx={{ opacity: 0.8, mb: '55px' }}
              >
                Сопровождение и&nbsp;поддержка сайтов <br /> на&nbsp;CMS Drupal
                любых версий и&nbsp;запущенности
              </Typography>

              <Button
                variant="outlined"
                href="#offers"
                sx={{
                  color: theme.palette.common.white,
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
              >
                Тарифы
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {heroData.map(({ title, body }, idx) => (
                <Grid key={idx} item xs={6} sm={4}>
                  <Box
                    sx={{
                      height: '100%',
                      minHeight: theme.spacing(8),
                      borderLeft: `3px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Stack
                      spacing={0.5}
                      sx={{ padding: theme.spacing(0.25, 1) }}
                    >
                      {idx === 0 && (
                        <Stack
                          direction="row"
                          sx={{ mt: -3.25, alignItems: 'flex-end' }}
                        >
                          <Typography
                            color="white"
                            variant="h3"
                            sx={{
                              fontSize: '3rem',
                              lineHeight: '40px',
                            }}
                          >
                            {title}
                          </Typography>
                          <img
                            src="images/home/hero_cup.png"
                            height="58px"
                            width="58px"
                            alt="Hero Cup"
                          />
                        </Stack>
                      )}

                      {idx !== 0 && (
                        <Typography variant="h3" color="white">
                          {title}
                        </Typography>
                      )}

                      <Typography
                        color="white"
                        sx={{
                          opacity: '0.7',
                          fontSize: '0.75rem',
                          lineHeight: '1.2',
                        }}
                      >
                        {body}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  )
}
