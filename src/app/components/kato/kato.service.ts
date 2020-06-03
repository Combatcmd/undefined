import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class KatoService {
  private url = "eprocglobal/open-api/katoes";
  constructor(private http: HttpClient) {}

  get():Observable<any> {
    return  this.http.get(this.url)
  }
}
