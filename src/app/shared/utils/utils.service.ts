import { Injectable } from '@angular/core'
import * as moment from 'moment'

interface Params {
  name: string
  value: string | number
}

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

  createUrlParams(params: Params[]) {
    let urlParam: any = ''
    params.map((item: any) => {
      const { name, value } = item
      if (value !== undefined) {
        urlParam += `&${name}=${value}`
      }
    })

    if (urlParam) {
      urlParam = `?${urlParam.substr(1, urlParam.length - 1)}`
    }

    return urlParam
  }

  isEmpty(val): boolean {
    if (val === '' || typeof val === 'undefined' || val === null) {
      return true
    } else {
      return false
    }
  }
}
