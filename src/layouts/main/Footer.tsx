import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { pxToRem } from '../../theme/typography'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: '50px',
  paddingBottom: '30px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },
}))

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
  name: yup.string().required('Введите имя'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Введите верный телефон')
    .required('Введите телефон'),
  email: yup.string().email('Введите верный email').required('Введите Email'),
  comment: yup
    .string()
    .min(8, 'Длина комментария должна составлять не менее 8 символов')
    .required('Введите комментарий'),
})

export default function Footer() {
  const theme = useTheme()

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      comment: '',
      approval: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2))
      resetForm()
    },
  })

  return (
    <StyledRoot
      id="footer"
      sx={{
        background:
          'linear-gradient(254.72deg,#ffffff46 -114.85%,#fff0 69.04%),url(/icons/home/footer_d.svg) no-repeat top center,url(/icons/home/footer_big_d.svg) no-repeat bottom right,#040613;',
        backgroundSize: 'cover, 165px, 140px',

        [theme.breakpoints.up('sm')]: {
          backgroundSize: 'cover, 235px, 230px',
        },

        [theme.breakpoints.up('md')]: {
          backgroundSize: 'auto',
        },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h2" sx={{ color: '#fff', mb: '20px' }}>
                Оставить заявку на поддержку сайта
              </Typography>
              <Typography sx={{ color: '#fff', opacity: '0.7', mb: '140px' }}>
                Срочно нужна поддержка сайта? Ваша команда не успевает
                справиться самостоятельно или предыдущий подрядчик не справился
                с работой? Тогда вам точно к нам! Просто оставьте заявку и наш
                менеджер с вами свяжется!
              </Typography>

              <Stack spacing={1}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: 'center' }}
                >
                  <LocalPhoneOutlinedIcon width={24} sx={{ color: '#fff' }} />
                  <Link
                    href="tel:+88002222673"
                    color="white"
                    underline="none"
                    sx={{
                      fontWeight: 700,
                      fontSize: pxToRem(32),
                      lineHeight: 1.5,
                    }}
                  >
                    8 800 222-26-73
                  </Link>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: 'center' }}
                >
                  <EmailOutlinedIcon width={24} sx={{ color: '#fff' }} />

                  <Link
                    color="white"
                    underline="none"
                    href="mailto:info@drupal-coder.ru"
                  >
                    info@drupal-coder.ru
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Ваше имя"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Телефон"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="E-mail"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="comment"
                  name="comment"
                  label="Ваш комментарий"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.comment && Boolean(formik.errors.comment)
                  }
                  helperText={formik.touched.comment && formik.errors.comment}
                />
                <FormGroup>
                  <FormControlLabel
                    checked={formik.values.approval}
                    onChange={formik.handleChange}
                    control={<Checkbox id="approval" />}
                    label="Отправляя заявку, я даю согласие на обработку своих персональных данных"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        color: '#fff',
                        fontWeight: 400,
                        fontSize: '0.75rem',
                        lineHeight: 1.25,
                      },
                    }}
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={!formik.values.approval}
                >
                  Оставить заявку!
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: '#fff', opacity: 0.3, my: 8 }} />

      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              fontSize: pxToRem(12),
              lineHeight: 1.4,
              color: '#fff',
              opacity: 0.5,
            }}
          >
            <Typography>Проект ООО «Инитлаб», Краснодар, Россия.</Typography>
            <Typography>
              Drupal является зарегистрированной торговой маркой Dries Buytaert.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  )
}
