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

  api = 'http://localhost:3000/user/signup';
  otpVerify = 'http://localhost:3000/user/verify-otp';

  getApi(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }
  verifyOtp(data:any):Observable<any>{
    return this.http.post(this.otpVerify,data)
  }
  
}
