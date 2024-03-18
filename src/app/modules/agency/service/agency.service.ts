import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  constructor(private http: HttpClient) {}
  agencyApi = 'http://localhost:3000/agency';

  MediaForm(data: any): Observable<any> {
    return this.http.post(`${this.agencyApi}/MediaForm`, data);
  }
  Location(data: any): Observable<any> {
    return this.http.post(`${this.agencyApi}/Location`, data);
  }
  Decoration(data: any): Observable<any> {
    return this.http.post(`${this.agencyApi}/Decoration`, data);
  }
  catering(data: any): Observable<any> {
    return this.http.post(`${this.agencyApi}/catering`, data);
  }
  deleteService(id: any): Observable<any> {
    return this.http.delete(`${this.agencyApi}/deleteService/${id}`);
  }

  getDetails(id:any):Observable<any>{
    console.log(id);
    return this.http.get(`${this.agencyApi}/getFormDetails/${id}`)
  }
}
