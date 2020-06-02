import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Entry } from '../models/entry.model'
import { createRequestOption } from '../utils/request-util'
import { UtilsService } from '../utils/utils.service'

@Injectable()
export class EntryService {
  private resourceUrl = 'eprocglobal/api/entries'
  private resourceSearchUrl = 'eprocglobal/api/_search/entries'

  constructor(private http: HttpClient, private utils: UtilsService) {}

  create(entry: Entry): Observable<Entry> {
    const copy = this.convert(entry)
    return this.http.post(this.resourceUrl, copy)
  }

  update(entry: Entry): Observable<Entry> {
    const copy = this.convert(entry)
    return this.http.put(this.resourceUrl, copy)
  }

  find(id: number): Observable<Entry> {
    return this.http.get(`${this.resourceUrl}/${id}`)
  }

  get(type: string, name?, size?): Observable<Entry> {
    return this.http.get(
      `eproc${name ? name : 'global'}/api/entries?code=${type}${
        size ? '&size=' + size : ''
      }`
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}/${id}`)
  }

  search(req?: any): Observable<any> {
    const options = createRequestOption(req)
    return this.http.get(this.resourceSearchUrl, {
      ...options,
      observe: 'response',
    })
  }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req)
    return this.http.get(this.resourceUrl, { ...options, observe: 'response' })
  }
  getOpenApi(type: string, name?, size?: number): Observable<Entry> {
    return this.http.get(
      `eproc${name ? name : 'global'}/open-api/entries?code=${type}${
        size ? '&size=' + size : ''
      }`
    )
  }

  getByDictionaryCodeAndEntryCode(
    dictionaryCode: string,
    entryCode: string,
    openApi?: boolean
  ): Observable<Entry> {
    return this.http.get(
      `eprocglobal/` +
        (openApi ? 'open-api' : 'api') +
        `/entries/data?entryCode=${entryCode}&dictionaryCode=${dictionaryCode}`
    )
  }

  getAllSTKZCertificates(paramsArray): Observable<any> {
    let params = this.utils.createUrlParams(paramsArray)
    return this.http.get(`eprocglobal/api/stkz-certificates/${params}`)
  }

  private convert(entry: Entry): Entry {
    const copy: Entry = Object.assign({}, entry)
    return copy
  }
}
