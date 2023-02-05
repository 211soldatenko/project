import { Container, Grid, styled, Typography } from '@mui/material'
import SectionRoot from '../../components/section-root'
import { pxToRem } from '../../theme/typography'
import { supportData } from './homeConfig'

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: theme.spacing(36.5),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(0.625),
  boxShadow: theme.customShadows.z20,
}))

const CardContent = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3, 3, 5),
  zIndex: 10,
}))

const CardNum = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: pxToRem(12),
  lineHeight: 1.3,
  opacity: 0.5,
}))

const CardIcon = styled('img')(() => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
}))
CardIcon.defaultProps = {
  height: 84,
  width: 84,
  'aria-hidden': true,
}

interface SupportCardProps {
  num: number
  title: string
  body: string
  iconSrc: string
}

function SupportCard({ num, title, body, iconSrc }: SupportCardProps) {
  const orderNumber = `${num < 10 ? '0' + num : num}.`

  return (
    <Card>
      <CardContent>
        <CardNum sx={{ mb: 2.5 }}>{orderNumber}</CardNum>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        <Typography sx={{ opacity: 0.7 }}>{body}</Typography>
      </CardContent>
      <CardIcon src={iconSrc} />
    </Card>
  )
}

export default function HomeSupport() {
  return (
    <SectionRoot id="support">
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: { xs: 3, md: 7 }, textAlign: 'center' }}
        >
          Поддержка от <br /> Drupal-coder
        </Typography>

        <Grid
          container
          spacing={0.75}
          sx={{ position: 'relative', zIndex: 10, mb: '-300px' }}
        >
          {supportData.map(({ num, title, body, iconSrc }) => (
            <Grid key={num} item xs={12} sm={6} md={4} lg={3}>
              <SupportCard
                num={num}
                title={title}
                body={body}
                iconSrc={iconSrc}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionRoot>
  )
}
