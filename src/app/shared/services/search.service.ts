import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { createRequestOption } from '../utils/request-util'

export type InternalStateType = {
  [key: string]: any
}

@Injectable()
export class SearchService {
  private resourceLotUrl = 'eprocsearch/api/external/lots'
  private resourcePlanUrl = 'eprocsearch/api/external/plan-items'
  private resourceAdvertUrl = 'eprocsearch/api/external/4dv3rts'

  public _state: InternalStateType = {}

  constructor(private http: HttpClient) {}

  // already return a clone of the current state
  public get state() {
    return this._state
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the `.state` directly')
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state
    return state.hasOwnProperty(prop) ? state[prop] : state
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify(object))
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return (this._state[prop] = value)
  }

  getLotList(data: any, req): Observable<any> {
    const options = createRequestOption(req)
    return this.http.post(`${this.resourceLotUrl}/filter`, data, options).pipe(
      map((response) => {
        return response
      })
    )
  }

  //   getLotItem(id: number): Observable<any> {
  //     return this.http
  //       .get(`${this.resourceLotUrl}/${id}`)
  //       .map((res: Response) => {
  //         return res.json()
  //       })
  //   }

  //   getPlanList(data: any, req): Observable<any> {
  //     const options = createRequestOption(req)
  //     return this.http
  //       .post(`${this.resourcePlanUrl}/filter`, data, options)
  //       .map((res: Response) => {
  //         return res
  //       })
  //   }

  //   getPlanItem(id: number): Observable<any> {
  //     return this.http
  //       .get(`${this.resourcePlanUrl}/${id}`)
  //       .map((res: Response) => {
  //         return res.json()
  //       })
  //   }

  //   getAdvertList(data: any, req): Observable<any> {
  //     const options = createRequestOption(req)
  //     return this.http
  //       .post(`${this.resourceAdvertUrl}/filter`, data, options)
  //       .map((res: Response) => {
  //         return res
  //       })
  //   }

  //   getAdvertItem(id: number): Observable<any> {
  //     return this.http
  //       .get(`${this.resourceAdvertUrl}/${id}`)
  //       .map((res: Response) => {
  //         return res.json()
  //       })
  //   }

  //   getAdvertLotList(advertId: any, req): Observable<any> {
  //     const options = createRequestOption(req)
  //     return this.http
  //       .get(`${this.resourceAdvertUrl}/lots/${advertId}`, options)
  //       .map((res: Response) => {
  //         return res
  //       })
  //   }

  //   startDownloadExcell(data, type: 'plan' | 'advert' | 'lot'): Observable<any> {
  //     let url =
  //       type === 'advert'
  //         ? `eprocreport/api/export-documents-ext/send/external-4dv3rts`
  //         : type === 'lot'
  //         ? `eprocreport/api/export-documents-ext/send/external-lots`
  //         : type === 'plan'
  //         ? `eprocreport/api/export-documents-ext/send/external-plan-items`
  //         : ''
  //     return this.http.put(url, data).map((res: Response) => {
  //       return res.json()
  //     })
  //   }

  //   getDownloadExcell(data, type: 'plan' | 'advert' | 'lot'): Observable<any> {
  //     let url =
  //       type === 'advert'
  //         ? `eprocreport/api/export-documents-ext/external-4dv3rts`
  //         : type === 'lot'
  //         ? `eprocreport/api/export-documents-ext/external-lots`
  //         : type === 'plan'
  //         ? `eprocreport/api/export-documents-ext/external-plan-items`
  //         : ''
  //     return this.http.put(url, data).map((res: Response) => {
  //       return res
  //     })
  //   }

  //   searchCompanies(q: any): Observable<any> {
  //     // const options = createRequestOption(req);
  //     return this.http
  //       .get(
  //         `eprocglobal/open-api/_search/companies-ext?query=${q}&page=0&size=20&sort=id,asc`
  //       )
  //       .map((res: Response) => {
  //         return res
  //       })
  //   }

  //   getAllFiles(data: any): Observable<any> {
  //     return this.http
  //       .post(`eprocfilestorage/api/files/zip`, data)
  //       .map((res: Response) => {
  //         return res.json()
  //       })
  //   }

  //   createOffer(data): Observable<any> {
  //     return this.http
  //       .post(`eproctender/api/commercial-offer`, data)
  //       .map((res: Response) => res)
  //   }

  //   arrayBufferToBase64(buffer) {
  //     let binary = ''
  //     let bytes = new Uint8Array(buffer)
  //     let len = bytes.byteLength
  //     for (let i = 0; i < len; i++) {
  //       binary += String.fromCharCode(bytes[i])
  //     }
  //     return btoa(binary)
  //   }
}
