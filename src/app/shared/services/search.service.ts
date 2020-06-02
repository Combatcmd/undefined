import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
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
    return this.http.post(`${this.resourceLotUrl}/filter`, data, {
      ...options,
      observe: 'response',
    })
  }

  getLotItem(id: number): Observable<any> {
    return this.http.get(`${this.resourceLotUrl}/${id}`)
  }

  getPlanList(data: any, req): Observable<any> {
    const options = createRequestOption(req)
    return this.http.post(`${this.resourcePlanUrl}/filter`, data, {
      ...options,
      observe: 'response',
    })
  }

  getPlanItem(id: number): Observable<any> {
    return this.http.get(`${this.resourcePlanUrl}/${id}`)
  }

  getAdvertList(data: any, req): Observable<any> {
    const options = createRequestOption(req)
    return this.http.post(`${this.resourceAdvertUrl}/filter`, data, {
      ...options,
      observe: 'response',
    })
  }

  getAdvertItem(id: number): Observable<any> {
    return this.http.get(`${this.resourceAdvertUrl}/${id}`)
  }

  getAdvertLotList(advertId: any, req): Observable<any> {
    const options = createRequestOption(req)
    return this.http.get(`${this.resourceAdvertUrl}/lots/${advertId}`, {
      ...options,
      observe: 'response',
    })
  }

  searchCompanies(q: any): Observable<any> {
    return this.http.get(
      `eprocglobal/open-api/_search/companies-ext?query=${q}&page=0&size=20&sort=id,asc`,
      { observe: 'response' }
    )
  }

  getAllFiles(data: any): Observable<any> {
    return this.http.post(`eprocfilestorage/api/files/zip`, data)
  }

  createOffer(data): Observable<any> {
    return this.http.post(`eproctender/api/commercial-offer`, data, {
      observe: 'response',
    })
  }

  arrayBufferToBase64(buffer) {
    let binary = ''
    let bytes = new Uint8Array(buffer)
    let len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }
}
