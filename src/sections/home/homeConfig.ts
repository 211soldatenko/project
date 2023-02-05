export const heroData: { title: string; body: string }[] = [
  {
    title: '#1',
    body: 'Drupal-разработчик в России по версии Рейтинга Рунета',
  },
  {
    title: '3+',
    body: 'средний опыт специалистов более 3 лет',
  },
  {
    title: '14',
    body: 'лет опыта в сфере Drupal',
  },
  {
    title: '200+',
    body: 'модулей и тем в формате DrupalGive',
  },
  {
    title: '35 000',
    body: 'часов поддержки сайтов на Drupal',
  },
  {
    title: '200+',
    body: 'проектов на поддержке',
  },
]

export const competencyData: { iconSrc: string; body: string }[] = [
  {
    iconSrc: '/icons/home/competency_1.svg',
    body: 'Добавление информации на сайт, создание новых разделов',
  },
  {
    iconSrc: '/icons/home/competency_2.svg',
    body: 'Разработка и оптимизация модулей сайта',
  },
  {
    iconSrc: '/icons/home/competency_3.svg',
    body: 'Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами',
  },
  {
    iconSrc: '/icons/home/competency_4.svg',
    body: 'Любые доработки функционала и дизайна',
  },
  {
    iconSrc: '/icons/home/competency_5.svg',
    body: 'Аудит и мониторинг безопасности Drupal сайтов',
  },
  {
    iconSrc: '/icons/home/competency_6.svg',
    body: 'Миграция, импорт контента и апгрейд Drupal',
  },
  {
    iconSrc: '/icons/home/competency_7.svg',
    body: 'Оптимизация и ускорение Drupal-сайтов',
  },
  {
    iconSrc: '/icons/home/competency_8.svg',
    body: 'Веб-маркетинг, консультации и работы по SEO',
  },
]

export const supportData: {
  num: number
  title: string
  body: string
  iconSrc: string
}[] = [
  {
    num: 1,
    title: 'Постановка задачи по Email',
    body: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.',
    iconSrc: '/icons/home/support_1.svg',
  },
  {
    num: 2,
    title: 'Система Helpdesk – отчетность, прозрачность',
    body: 'Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.',
    iconSrc: '/icons/home/support_2.svg',
  },
  {
    num: 3,
    title: 'Расширенная техническая поддержка',
    body: 'Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.',
    iconSrc: '/icons/home/support_3.svg',
  },
  {
    num: 4,
    title: 'Персональный менеджер проекта',
    body: 'Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.',
    iconSrc: '/icons/home/support_4.svg',
  },
  {
    num: 5,
    title: 'Удобные способы оплаты',
    body: 'Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.',
    iconSrc: '/icons/home/support_5.svg',
  },
  {
    num: 6,
    title: 'Работаем с SLA и NDA',
    body: 'Работа в рамках соглашений о конфиденциальности и об уровне качетсва работ.',
    iconSrc: '/icons/home/support_6.svg',
  },
  {
    num: 7,
    title: 'Штатные специалисты',
    body: 'Надежные штатные специалисты, никаких фрилансеров.',
    iconSrc: '/icons/home/support_7.svg',
  },
  {
    num: 8,
    title: 'Удобные каналы связи',
    body: 'Консультации по телефону, скайпу, в месенджерах.',
    iconSrc: '/icons/home/support_8.svg',
  },
]

export const expertiseData: { body: string }[] = [
  {
    body: 'Только системный подход – контроль версий, резервирование и тестирование!',
  },
  {
    body: 'Только Drupal сайты, не берем на поддержку сайты на других CMS!',
  },
]

export const offersData: {
  plan: string
  cost: string
  timeFrame: string
  options: string[]
}[] = [
  {
    plan: 'Стартовый',
    cost: '2000',
    timeFrame: 'в час',
    options: [
      'Предоплата от 2 часов',
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Стандартное время реакции',
      'Неиспользованные оплаченные часы переносятся на следующий месяц',
    ],
  },
  {
    plan: 'Бизнес',
    cost: '2000',
    timeFrame: 'в час',
    options: [
      'Предоплата от 10 часов',
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Высокое время реакции – до 2 рабочих дней',
      'Неиспользованные часы не переносятся',
    ],
  },
  {
    plan: 'VIP',
    cost: '1800',
    timeFrame: 'в час',
    options: [
      'Предоплата от 100 часов',
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Максимальное время реакции – в день обращения',
      'Неиспользованные часы не переносятся',
    ],
  },
]

export const teamData: { title: string; body: string; img: string }[] = [
  {
    title: 'Лёша',
    body: 'руководитель поддержки, планирование задач',
    img: '/images/home/team_1.png',
  },
  {
    title: 'Роман',
    body: 'инфраструктура веб-проектов',
    img: '/images/home/team_2.png',
  },
  {
    title: 'Ирина',
    body: 'менеджер по работе с клинетами, организация оказания услуг',
    img: '/images/home/team_3.png',
  },
  {
    title: 'Даша',
    body: 'SEO, веб-маркетинг',
    img: '/images/home/team_4.png',
  },
  {
    title: 'Сергей',
    body: 'технический директор, 14 лет опыт работы с Drupal',
    img: '/images/home/team_5.png',
  },
  {
    title: 'Вадим',
    body: 'UX/UI дизайн',
    img: '/images/home/team_6.png',
  },
]

export const reviewData: { title: string; body: string; img: string }[] = [
  {
    title: 'Команда Drupal Coder вызвала только положительные впечатления!',
    body: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
    img: '/images/home/slider_img.png',
  },
  {
    title: 'Команда Drupal Coder вызвала только положительные впечатления!',
    body: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
    img: '/images/home/slider_img.png',
  },
  {
    title: 'Команда Drupal Coder вызвала только положительные впечатления!',
    body: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
    img: '/images/home/slider_img.png',
  },
  {
    title: 'Команда Drupal Coder вызвала только положительные впечатления!',
    body: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
    img: '/images/home/slider_img.png',
  },
  {
    title: 'Команда Drupal Coder вызвала только положительные впечатления!',
    body: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
    img: '/images/home/slider_img.png',
  },
]
