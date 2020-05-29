import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import {
  createRequestOption,
  UtilsService,
  ResponseWrapper,
} from '../../shared'

@Injectable()
export class FaqService {
  private resourceUrl = '/eprocglobal/api/faq'
  private openSearchUrl = '/eprocsearch/open-api/faq'
  private getNameAndCountUrl = '/eprocsearch/open-api/getNameAndCountFaq'
  constructor(private http: HttpClient, private utils: UtilsService) {}

  getNameAndCount(): Observable<any> {
    return this.http.get(this.getNameAndCountUrl).pipe(
      map((response) => {
        return response
      })
    )
  }

  get(paramsArray?, req?: any): Observable<HttpResponse<object>> {
    const options = createRequestOption(req)
    let params = paramsArray ? this.utils.createUrlParams(paramsArray) : ''
    return this.http.get(`${this.openSearchUrl}/${params}`, {
      ...options,
      observe: 'response',
    })
  }

  create(faq): Observable<any> {
    return this.http.put(this.resourceUrl, faq).pipe(
      map((response) => {
        return response
      })
    )
  }

  update(faq): Observable<any> {
    return this.http.put(this.resourceUrl, faq).pipe(
      map((response) => {
        return response
      })
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}/${id}`)
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).pipe(
      map((response) => {
        return response
      })
    )
  }

  private convertResponse(response): ResponseWrapper {
    const jsonResponse = response.json()
    return new ResponseWrapper(response.headers, jsonResponse, response.status)
  }
}
