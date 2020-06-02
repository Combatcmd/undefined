export const PLAN_TYPE = [
  {
    code: 'PREBASIC',
    ru: 'Перечень',
    kk: 'Бекітілген',
    en: 'Перечень',
  },
  {
    code: 'BASIC',
    ru: 'Основной план',
    kk: 'Бірінші кезекті',
    en: 'Основной план',
  },
]

export const PLAN_DURATION_TYPE = [
  {
    code: 'ANNUAL',
    ru: 'Годовой',
    kk: 'Жылдық',
    en: 'Годовой',
  },
  {
    code: 'LONG_TIME',
    ru: 'Долгосрочный',
    kk: 'Ұзақ мерзімді',
    en: 'Долгосрочный',
  },
]

export const YEAR_LIST = [
  {
    code: 2020,
    ru: '2020',
    kk: '2020',
    en: '2020',
  },
  {
    code: 2021,
    ru: '2021',
    kk: '2021',
    en: '2021',
  },
  {
    code: 2022,
    ru: '2022',
    kk: '2022',
    en: '2022',
  },
  {
    code: 2023,
    ru: '2023',
    kk: '2023',
    en: '2023',
  },
]

export const ADVERT_STATUS = [
  {
    code: 'PUBLISHED',
    ru: 'Опубликовано',
    kk: 'Жарияланды',
    en: 'Published',
  },
  {
    code: 'PROPOSED',
    ru: 'На рассмотрении заявок',
    kk: 'Өтініштер қаралуда',
    en: 'On consideration of applications',
  },
  {
    code: 'PUBLISHED_AUCTION',
    ru: 'Опубликовано. Торги',
    kk: 'Жарияланды. Сауда-саттықтар',
    en: 'Published. Auction',
  },
  {
    code: 'AUCTION',
    ru: 'Торги',
    kk: 'Сауда-саттықтар',
    en: 'Auction',
  },
  {
    code: 'PURCHASING_APPROVE',
    ru: 'Согласование утверждающим',
    kk: 'Бекітушімен келісу',
    en: 'Agreement of the approver',
  },
  {
    code: 'OPENING',
    ru: 'Вскрытие',
    kk: 'Ашу',
    en: 'Opening',
  },
  {
    code: 'CANCELLED',
    ru: 'Отменен',
    kk: 'Болдырылмады',
    en: 'Cancelled',
  },
  {
    code: 'REVIEW',
    ru: 'Пересмотр итогов',
    kk: 'Нәтижелерді қайта қарау',
    en: 'Results revision',
  },
  {
    code: 'CLOSED',
    ru: 'Завершено',
    kk: 'Аяқталды',
    en: 'Completed',
  },
  {
    code: 'SUMMARIZING',
    ru: 'Подведение итогов',
    kk: 'Қорытындылау',
    en: 'Summarizing',
  },
  {
    code: 'AMENDED',
    ru: 'Внесена поправка',
    kk: 'Түзету жүргізілді',
    en: 'Correction is made',
  },
]

export const LOT_STATUS = [
  {
    code: 'PUBLISHED',
    ru: 'Опубликовано',
    kk: 'Жарияланды',
    en: 'Published',
  },
  {
    code: 'PROPOSED',
    ru: 'На рассмотрении заявок',
    kk: 'Өтініштер қаралуда',
    en: 'On consideration of applications',
  },
  {
    code: 'PUBLISHED_AUCTION',
    ru: 'Опубликовано. Торги',
    kk: 'Жарияланды. Сауда-саттықтар',
    en: 'Published. Auction',
  },
  {
    code: 'AUCTION',
    ru: 'Торги',
    kk: 'Сауда-саттықтар',
    en: 'Auction',
  },
  {
    code: 'PURCHASING_APPROVE',
    ru: 'Согласование утверждающим',
    kk: 'Бекітушімен келісу',
    en: 'Agreement of the approver',
  },
  {
    code: 'PUBLISHED_SUPPLEMENT',
    ru: 'Опубликовано. Дополнение заявок',
    kk: 'Жарияланды. Өтінімдерді толықтау',
    en: 'Published. Addition of applications',
  },
  {
    code: 'DISCUSSION_PUBLISHED',
    ru: 'Опубликовано предварительное обсуждение',
    kk: 'Алдынала талқылау жарияланды',
    en: 'Preliminary discussion is published',
  },
  {
    code: 'DISCUSSION_REVIEW_INITIATOR',
    ru: 'Рассмотрение предварительного обсуждения инициатором',
    kk: 'Алдынала талқылауды бастамашымен қарастыру',
    en: 'Consideration of the preliminary discussion by the initiator',
  },
  {
    code: 'DISCUSSION_REVIEW_OPERATOR',
    ru: 'Рассмотрение предварительного обсуждения оператором',
    kk: 'Алдынала талқылауды оператормен қарастыру',
    en: 'Consideration of the preliminary discussion by the Operator',
  },
  {
    code: 'DISCUSSION_REVIEW_OMBUDSMAN',
    ru: 'Рассмотрение предварительного обсуждения уполномоченным лицом',
    kk: 'Алдынала талқылауды уәкілетті органмен қарастыру',
    en: 'Consideration of the preliminary discussion by the authorized person',
  },
  {
    code: 'DISCUSSION_CLOSED',
    ru: 'Предварительное обсуждение завершено',
    kk: 'Алдынала талқылау аяқталды',
    en: 'Preliminaty discussion is finished',
  },
  {
    code: 'CORRECTION_INITIATOR',
    ru: 'Корректировка инициатором',
    kk: 'Бастамашымен түзету',
    en: 'Correction by initiator',
  },
  {
    code: 'CORRECTION_OPERATOR',
    ru: 'Корректировка оператором',
    kk: 'Оператормен түзетім',
    en: 'Correction by Operator',
  },
  {
    code: 'EXECUTED',
    ru: 'Итоги. Закупка состоялась',
    kk: 'Нәтижелер. Сатып алу жүргізілді',
    en: 'Overall results. Purchase succeeded',
  },
  {
    code: 'EXECUTED_FIRST_STAGE',
    ru: 'Итоги. 1 этап',
    kk: 'Нәтижелер. 1 кезең',
    en: 'Totals. Stage 1',
  },
  {
    code: 'NEGFAILED',
    ru: 'Итоги. Закупка не состоялась',
    kk: 'Қорытындылар. Сатып алу өтпеді',
    en: 'Overall results. The purchase did not succeed',
  },
  {
    code: 'CANCELLED',
    ru: 'Отменен',
    kk: 'Болдырылмады',
    en: 'Cancelled',
  },
  {
    code: 'REVIEW',
    ru: 'Пересмотр итогов',
    kk: 'Нәтижелерді қайта қарау',
    en: 'Results revision',
  },
  {
    code: 'SUMMARIZING',
    ru: 'Подведение итогов',
    kk: 'Қорытындылау',
    en: 'Summarizing',
  },
  {
    code: 'AMENDED',
    ru: 'Внесена поправка',
    kk: 'Түзету жүргізілді',
    en: 'Correction is made',
  },
]
export const PLAN_STATUS = [
  {
    code: 'APPROVED',
    ru: 'Утвержден',
    kk: 'Бекітілді',
    en: 'Approved',
  },
]
