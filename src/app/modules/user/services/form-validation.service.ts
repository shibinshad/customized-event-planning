// form-validation.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor(private http: HttpClient) {}

  api = 'http://localhost:3000/user';

  getApi(data: any): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }
  verifyOtp(data:any):Observable<any>{
    return this.http.post(`${this.api}/verify-otp`,data)
  }
  profile(data:any):Observable<any>{
    return this.http.post(`${this.api}/profile`,data)
  }
  
  
}
