import { Box, Container, Grid, Typography } from '@mui/material'
import SectionRoot from '../../components/section-root'
import { teamData } from './homeConfig'

export default function HomeTeam() {
  return (
    <SectionRoot id="team">
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: { xs: 3, md: 7 }, textAlign: 'center' }}
        >
          Команда
        </Typography>

        <Grid container spacing={3}>
          {teamData.map(({ title, body, img }, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  maxWidth: '280px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  width="280px"
                  height="280px"
                  src={img}
                  sx={{
                    height: 'auto',
                    width: '100%',
                  }}
                />
                <Box sx={{ padding: '30px 0' }}>
                  <Typography variant="h4">{title}</Typography>
                  <Typography>{body}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionRoot>
  )
}
