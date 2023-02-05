import { Container, Stack, styled, Typography } from '@mui/material'
import SectionRoot from '../../components/section-root'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'

const StyledSlide = styled('div')(({ theme }) => ({
  height: '155px',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  backgroundImage: `url(images/home/slide_${Math.floor(
    Math.random() * 4,
  )}.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}))

export default function HomePartners() {
  return (
    <SectionRoot id="partners">
      <Container>
        <Stack spacing={2} sx={{ mb: { xs: 3, md: 7 }, textAlign: 'center' }}>
          <Typography variant="h2">С нами работают</Typography>
          <Typography sx={{ opacity: 0.7 }}>
            Десятки компаний доверяют нам самое ценное, что у них есть в
            интернете – свои <br /> сайты. Мы делаем всё, чтобы наше
            сотрудничество было долгим.
          </Typography>
        </Stack>
      </Container>

      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={3000}
        slidesPerView="auto"
        spaceBetween={20}
        style={{
          marginBottom: '20px',
        }}
      >
        {[...new Array(20)].map((_, idx) => (
          <SwiperSlide key={idx} style={{ width: '290px' }}>
            <StyledSlide />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={3000}
        slidesPerView="auto"
        spaceBetween={20}
      >
        {[...new Array(20)].map((_, idx) => (
          <SwiperSlide key={idx} style={{ width: '290px' }}>
            <StyledSlide />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionRoot>
  )
}
