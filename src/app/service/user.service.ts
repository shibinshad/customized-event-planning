import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  api = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getLocation():Observable<any>{
    return this.http.get(`${this.api}/user/locations`)
  }

  getcatering():Observable<any>{
    return this.http.get(`${this.api}/user/catering`)
  }
  getmedia():Observable<any>{
    return this.http.get(`${this.api}/user/media`)
  }
  getdecorations():Observable<any>{
    return this.http.get(`${this.api}/user/decorations`)
  }

}
