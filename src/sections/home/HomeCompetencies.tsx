import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import SectionRoot from '../../components/section-root'
import { competencyData } from './homeConfig'

const StyledStack = styled(Stack)(({ theme }) => ({
  maxWidth: theme.spacing(25),
}))

const CardMediaBackground = styled('img')(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  transform: 'translateX(-50%)',
}))
CardMediaBackground.defaultProps = {
  src: '/icons/home/competency_bg.svg',
  width: '114px',
  height: '71px',
  'aria-hidden': true,
}

interface CompetencyCardProps {
  iconSrc: string
  body: string
}

function CompetencyCard({ iconSrc, body }: CompetencyCardProps) {
  return (
    <StyledStack spacing={3}>
      <Box sx={{ position: 'relative' }}>
        <img
          src={iconSrc}
          width={81}
          height={81}
          alt="img"
          aria-hidden={true}
        />
        <CardMediaBackground />
      </Box>
      <Typography sx={{ opacity: 0.7 }}>{body}</Typography>
    </StyledStack>
  )
}

export default function HomeCompetencies() {
  return (
    <SectionRoot id="competencies">
      <Container>
        <Stack spacing={2} sx={{ mb: { xs: 3, md: 7 } }}>
          <Typography variant="h2">
            13 лет совершенствуем <br /> компетенции в Drupal <br /> поддержке!
          </Typography>
          <Typography sx={{ opacity: 0.7 }}>
            Разрабатываем и оптимизируем модули, расширяем <br />
            функциональность сайтов, обновляем дизайн
          </Typography>
        </Stack>

        <Grid container columnSpacing={3} rowSpacing={7}>
          {competencyData.map(({ iconSrc, body }, idx) => (
            <Grid key={idx} item xs={6} sm={4} md={3}>
              <CompetencyCard iconSrc={iconSrc} body={body} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionRoot>
  )
}
