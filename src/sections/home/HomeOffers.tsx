import {
  Box,
  BoxProps,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import SectionRoot from '../../components/section-root'
import { pxToRem } from '../../theme/typography'
import { offersData } from './homeConfig'

const StyledSectionRoot = styled(SectionRoot)(({ theme }) => ({
  background: 'url(/images/home/offer_bg.png) right top no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.up('md')]: {
    backgroundSize: '58%',
  },
}))

interface CardProps extends BoxProps {
  hover?: boolean
}

const Card = styled('div', {
  shouldForwardProp: prop => prop !== 'hover',
})<CardProps>(({ theme, hover = false }) => ({
  position: 'relative',
  zIndex: 10,
  cursor: 'pointer',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(0.625),
  backgroundColor: theme.palette.grey[50],
  transition: theme.transitions.create(['transform', 'background-color']),
  height: '100%',
  maxWidth: theme.spacing(52.5),
  margin: '0 auto',

  [theme.breakpoints.up('md')]: {
    ...(hover && {
      backgroundColor: theme.palette.background.paper,
      transform: 'scale(1.05)',
      zIndex: 20,

      '& .MuiButton-root': {
        color: theme.palette.common.white,
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
}))

const CardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(3.75, 2),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(9.625, 7.5, 6),
  },

  '& .MuiButton-root': {
    marginTop: 'auto',
  },
}))

const CardHeader = styled('div')(({ theme }) => ({
  borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
  paddingBottom: theme.spacing(2.5),
  marginBottom: theme.spacing(5),
}))

const CardPrice = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: pxToRem(72),
  lineHeight: 1,
}))

const CardCurrency = styled('sup')(() => ({
  fontWeight: 500,
  fontSize: pxToRem(28),
  lineHeight: 1,
}))

const CardCheckmark = styled('img')(() => ({
  marginTop: '5px',
}))
CardCheckmark.defaultProps = {
  src: '/icons/home/checkmark.svg',
  width: '13px',
  height: '11px',
  'aria-hidden': true,
}

enum OfferHover {
  Left,
  Mid,
  Right,
}

export default function HomeOffers() {
  const [hover, setHover] = useState<OfferHover>(OfferHover.Mid)
  const theme = useTheme()

  return (
    <StyledSectionRoot id="offers">
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: { xs: 3, md: 7 }, textAlign: 'center' }}
        >
          Тарифы
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, md: 0 }}
          sx={{ mb: { xs: 5, md: 10 } }}
          onMouseLeave={() => setHover(OfferHover.Mid)}
        >
          {offersData.map(({ plan, cost, timeFrame, options }, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Card hover={idx === hover} onMouseEnter={() => setHover(idx)}>
                <CardWrapper>
                  <CardHeader>
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: pxToRem(22),
                        lineHeight: 1.2,
                      }}
                    >
                      {plan}
                    </Typography>
                    <CardPrice>
                      {cost}
                      <CardCurrency> &#8381;</CardCurrency>
                    </CardPrice>
                    <Typography>{timeFrame}</Typography>
                  </CardHeader>

                  <Stack spacing={3} sx={{ mb: 5 }}>
                    {options.map((option, idx) => (
                      <Stack key={idx} direction="row" spacing={2}>
                        <CardCheckmark />
                        <Typography>{option}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button variant="outlined" fullWidth sx={{ px: 0 }}>
                    Оставить заявку
                  </Button>
                </CardWrapper>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: '468px', textAlign: 'center', mx: 'auto' }}>
          <Typography sx={{ mb: 2, opacity: '0.5' }}>
            Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
            индивидуальные условия!
          </Typography>
          <Link
            sx={{
              color: theme.palette.text.primary,
              fontSize: pxToRem(12),
              textTransform: 'uppercase',
              textDecoration: 'underline',
            }}
          >
            Получить индивидуальный тариф
          </Link>
        </Box>
      </Container>
    </StyledSectionRoot>
  )
}
