import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AdminService{
    constructor(private http:HttpClient){}
    api:any='http://192.168.0.66:3000/admin'

    getUsers():Observable<any>{
        return this.http.get(`${this.api}/usersList`)
    }
    getAgency():Observable<any>{
        return this.http.get(`${this.api}/agencyList`)
    }


}