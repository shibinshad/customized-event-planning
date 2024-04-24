import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class paymentService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:3000/user';

  createOrder(price:any): Observable<any> {
    return this.http.post(`${this.api}/createOrder`, {price});
  }

  successPayment(data:any):Observable<any>{
    return this.http.post(`${this.api}/successPayment` ,{data})
  }
}
