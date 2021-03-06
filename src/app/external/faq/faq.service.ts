import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption, UtilsService } from '../../shared';

@Injectable()
export class FaqService {
  private resourceUrl = '/eprocglobal/api/faq';
  private openSearchUrl = '/eprocsearch/open-api/faq';
  private getNameAndCountUrl = '/eprocsearch/open-api/getNameAndCountFaq';
  constructor(private http: HttpClient, private utils: UtilsService) {}

  getNameAndCount(): Observable<any> {
    return this.http.get(this.getNameAndCountUrl);
  }

  get(paramsArray?, req?: any): Observable<HttpResponse<object>> {
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

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }
}
