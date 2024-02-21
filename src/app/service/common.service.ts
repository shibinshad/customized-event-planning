import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  api='http://localhost:3000'

  getApi(data: any): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }
  verifyOtp(data:any):Observable<any>{
    return this.http.post(`${this.api}/verify-otp`,data)
  }
  login(data:any):Observable<any> {
    return this.http.post(`${this.api}/login`, data);
  }
}
