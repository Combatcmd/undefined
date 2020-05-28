import { Injectable } from '@angular/core'
import * as moment from 'moment'

@Injectable()
export class UtilsService {
  constructor() {}

  capitalize(s: string) {
    return s ? s[0].toUpperCase() + s.slice(1) : ''
  }

  createFieldWCurLang(key: string) {
    return (
      key +
      this.capitalize(
        'ru'
        // this.translateService.currentLang ? this.translateService.currentLang : 'ru'
      )
    )
  }

  dateFormat(date) {
    return moment(date).format('YYYY-MM-DD')
  }
}
