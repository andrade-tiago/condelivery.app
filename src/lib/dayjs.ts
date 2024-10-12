import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import updateLocale from 'dayjs/plugin/updateLocale'
import calendar from 'dayjs/plugin/calendar'

dayjs.locale('pt-br')
dayjs.extend(calendar)
dayjs.extend(updateLocale)

dayjs.updateLocale('pt-br', {
  calendar: {
    sameDay: '[às] HH:mm',
    nextDay: '[amanhã às] HH:mm',
    lastDay: '[ontem às] HH:mm',
    sameElse: 'DD/MM/YYYY',
  },
})

export default dayjs
