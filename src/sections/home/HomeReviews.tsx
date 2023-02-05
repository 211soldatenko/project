import {
  Box,
  Container,
  Divider,
  IconButton,
  styled,
  Typography,
} from '@mui/material'

import SectionRoot from '../../components/section-root'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { reviewData } from './homeConfig'
import { pxToRem } from '../../theme/typography'
import 'swiper/css'

const SliderContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: '980px',
  margin: '0 auto',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  boxShadow: theme.customShadows.z4,
  backgroundColor: theme.palette.background.paper,

  '&::before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    height: '100px',
    zIndex: '-1',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },

  '&::before': {
    top: '-15px',
    left: '15px',
    right: '15px',
    opacity: '0.5',

    [theme.breakpoints.up('sm')]: {
      top: '-25px',
      left: '34px',
      right: '34px',
    },

    [theme.breakpoints.up('md')]: {
      top: '-40px',
      left: '64px',
      right: '64px',
    },
  },

  '&::after': {
    top: '-30px',
    left: '30px',
    right: '30px',
    opacity: '0.3',

    [theme.breakpoints.up('sm')]: {
      top: '-48px',
      left: '68px',
      right: '68px',
    },

    [theme.breakpoints.up('md')]: {
      top: '-72px',
      left: '128px',
      right: '128px',
    },
  },
}))

const SliderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.75),
  padding: theme.spacing(3.75),

  '& .swiper': {
    width: '100%',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10),
    flexDirection: 'row',
    gap: theme.spacing(7.5),
  },
}))

const SliderControlsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  minWidth: '210px',
  flexShrink: '0',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {},
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    borderRightWidth: 'thin',
    height: 'auto',
    alignSelf: 'stretch',
  },
}))

const PaginationWrapper = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: pxToRem(28),
  lineHeight: 1,
  color: theme.palette.grey[300],

  '& .current': {
    color: theme.palette.text.primary,
  },
}))

export default function HomeReviews() {
  return (
    <SectionRoot id="reviews">
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: { xs: 8, md: 12.5 }, textAlign: 'center' }}
        >
          Отзывы
        </Typography>

        <SliderContainer>
          <SliderWrapper>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
              pagination={{
                type: 'fraction',
                el: '.pagination',
                currentClass: 'current',
                totalClass: 'total',
                formatFractionCurrent: num => (num < 10 ? `0${num}` : num),
                formatFractionTotal: num => (num < 10 ? `0${num}` : num),
              }}
            >
              {reviewData.map(({ img, title, body }, idx) => (
                <SwiperSlide key={idx}>
                  <Box>
                    <img
                      src={img}
                      width="200"
                      height="46"
                      aria-label="img"
                      style={{ marginBottom: '40px' }}
                    />
                    <Typography variant="h3" sx={{ mb: 3.5 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ opacity: '0.5' }}>{body}</Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <StyledDivider />
            <SliderControlsWrapper>
              <IconButton size="small" className="prev">
                <img
                  src="/icons/home/slider_prev.svg"
                  width="32"
                  height="32"
                  aria-label="prev"
                />
              </IconButton>

              <PaginationWrapper className="pagination" />

              <IconButton size="small" className="next">
                <img
                  src="/icons/home/slider_next.svg"
                  width="32"
                  height="32"
                  aria-label="next"
                />
              </IconButton>
            </SliderControlsWrapper>
          </SliderWrapper>
        </SliderContainer>
      </Container>
    </SectionRoot>
  )
}
