// form-validation.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor(private http: HttpClient) {}

  api = environment.api;

  profile(data: any): Observable<any> {
    return this.http.post(`${this.api}/agency/profile`, data);
  }

  showProfile(): Observable<any> {
    return this.http.get(`${this.api}/user/showProfile`);
  }

  getOrders():Observable<any>{
    return this.http.get(`${this.api}/user/orders`)
  }
}
