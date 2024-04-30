import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  role: any;

  api = environment.api;

  getApi(data: any): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }
  verifyOtp(data: any): Observable<any> {
    return this.http.post(`${this.api}/verify-otp`, data);
  }
  login(data: any): Observable<any> {
    return this.http.post(`${this.api}/login`, data);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isAgency() {
    return (this.role = 'agency');
  }
}
