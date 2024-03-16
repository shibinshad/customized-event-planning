import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Injectable({
  providedIn: 'root',
})
export class AgencyGuard implements CanActivate {
  constructor(private commonServ: CommonService) {}

  canActivate(): boolean {
    if (this.commonServ.isLoggedIn() && this.commonServ.isAgency()) {
      return true;
    } else {
      return false;
    }
  }
}
