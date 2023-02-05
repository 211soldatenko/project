import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  StackProps,
  styled,
  Typography,
} from '@mui/material'
import SectionRoot from '../../components/section-root'
import { pxToRem } from '../../theme/typography'

interface CardProps extends StackProps {
  bgSrc?: string
}

const Card = styled(Stack, {
  shouldForwardProp: props => props !== 'bgSrc',
})<CardProps>(({ theme, bgSrc }) => ({
  position: 'relative',
  minHeight: '475px',
  height: '100%',
  borderRadius: '5px',
  overflow: 'hidden',

  ...(bgSrc && {
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: `url(${bgSrc}) center no-repeat`,
      backgroundSize: 'cover',
      zIndex: '-1',
    },
  }),
}))

const CardContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5, 2, 2),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 3.75),
  },
}))

const CardPoster = styled('img')(({ theme }) => ({
  height: '215px',
  width: '100%',
  objectFit: 'cover',
  flexShrink: 0,
  borderRadius: '5px',
}))

interface BlogCardProps {
  title: string
  bgSrc?: string
  posterSrc?: string
  date?: string
  description?: string
}

const BlogCard = ({
  title,
  posterSrc,
  bgSrc,
  date,
  description,
}: BlogCardProps) => {
  return (
    <Card bgSrc={bgSrc}>
      {posterSrc && (
        <CardPoster src={posterSrc} height={215} width={380} alt={title} />
      )}

      <CardContent sx={{ ...(bgSrc && { color: '#fff', mt: 'auto' }) }}>
        <Typography variant="h4">{title}</Typography>
        {date && (
          <Typography
            sx={{
              mt: '5px',
              fontWeight: 700,
              fontSize: pxToRem(12),
              lineHeight: 1.25,
              opacity: '0.5',
            }}
          >
            {date}
          </Typography>
        )}
        {description && <Typography sx={{ mt: 3 }}>{description}</Typography>}
      </CardContent>
    </Card>
  )
}

export default function HomeCases() {
  return (
    <SectionRoot id="cases">
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: { xs: 3, md: 7 }, textAlign: 'center' }}
        >
          Последние кейсы
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              posterSrc="/images/home/case_1.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
              date="22.04.2019"
              description="Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <BlogCard
              bgSrc="/images/home/case_2.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              bgSrc="/images/home/case_3.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
              date="22.04.2019"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              bgSrc="/images/home/case_4.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
              date="22.04.2019"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard
              posterSrc="/images/home/case_5.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
              date="22.04.2019"
              description="Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <BlogCard
              bgSrc="/images/home/case_6.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <BlogCard
              bgSrc="/images/home/case_7.png"
              title="Настройка выгрузки YML для Яндекс.Маркета"
              date="22.04.2019"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="outlined" color="secondary">
            Показать ещё
          </Button>
        </Box>
      </Container>
    </SectionRoot>
  )
}
