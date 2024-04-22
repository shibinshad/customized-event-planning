import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin = false
  title = 'frontend';
  isAdminRoute = false;
  constructor(private router: Router ,) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isAdminRoute = this.router.url.startsWith('/admin'); 
        if(this.isAdminRoute){
          this.isAdmin = true
        }
      });
  }
}
