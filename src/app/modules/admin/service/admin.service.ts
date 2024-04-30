import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment.prod";

@Injectable({
    providedIn:'root'
})

export class AdminService{
    constructor(private http:HttpClient){}
    api:any=environment.api

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