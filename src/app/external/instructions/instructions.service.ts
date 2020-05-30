import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption, UtilsService } from '../../shared';

@Injectable()
export class InformationService {
  private resourceUrl = '/eprocglobal/api/instruction';
  private openSearchUrl = '/eprocsearch/open-api/instruction';
  private getNameAndCountUrl =
    '/eprocsearch/open-api/instruction/getNameAndCount';
  constructor(private http: HttpClient, private utils: UtilsService) {}

  getNameAndCount(isAuth: boolean, type: string): Observable<any> {
    return this.http.get(
      `${this.getNameAndCountUrl}?onlyAuthUser=${isAuth}&instrType=${type}`
    );
  }

  get(paramsArray?, req?: any): Observable<any> {
    const options = createRequestOption(req);
    const params = paramsArray ? this.utils.createUrlParams(paramsArray) : '';
    return this.http.get(`${this.openSearchUrl}/${params}`, {
      ...options,
      observe: 'response',
    });
  }

  create(faq): Observable<any> {
    return this.http.put(this.resourceUrl, faq);
  }

  update(faq): Observable<any> {
    return this.http.put(this.resourceUrl, faq);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
