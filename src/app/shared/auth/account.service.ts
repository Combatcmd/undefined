import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get("eprocuaa/api/account").pipe(
      map((response) => {
        return response;
      })
    );
  }

  save(account: any): Observable<any> {
    return this.http.post("eprocuaa/api/account", account);
  }
}
