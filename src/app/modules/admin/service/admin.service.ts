import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AdminService{
    constructor(private http:HttpClient){}
    api:any='http://localhost:3000/admin'

    getUsers():Observable<any>{
        return this.http.get(`${this.api}/usersList`)
    }
    getAgency():Observable<any>{
        return this.http.get(`${this.api}/agencyList`)
    }
    block(userId:any):Observable<any> {
        return this.http.patch(`${this.api}/block`,{userId})
    }
    RemoveUser(userId:any):Observable<any> {
        return this.http.delete(`${this.api}/RemoveUser/${userId}`)
    }
    getPendingUsers():Observable<any>{
        return this.http.get(`${this.api}/getPending`)
    }
    approveUser(userId:any):Observable<any>{
        return this.http.patch(`${this.api}/approveUser`,{userId})
    }

}