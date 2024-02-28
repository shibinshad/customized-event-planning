import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  token = localStorage.getItem('token');
  canActivate(): boolean {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/signup']);
      return false;
    }
  }
}
