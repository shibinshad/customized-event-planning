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

  api = 'http://192.168.0.66:3000';

  
  profile(data:any):Observable<any>{
    return this.http.post(`${this.api}/agency/profile`,data)
  }
  
  showProfile():Observable<any>{
    return this.http.get(`${this.api}/agency/showProfile`)
  

  }
  
}
