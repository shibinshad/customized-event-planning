import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent {
  istogglebutton: Boolean = false;

  constructor(private router: Router) {}
  u() {
    this.router.navigate(['/admin/users']);
  }
  A() {
    this.router.navigate(['/admin/agencies']);
  }
  Ad() {
    this.router.navigate(['/admin/admin']);
  }
  p() {
    this.router.navigate(['/admin/pendingRequest']);
  }
  ad() {
    this.router.navigate(['/admin/dashbord']);
  }
  logout() {
    this.router.navigate(['//login']);
    localStorage.clear();
  }

  toggle() {
    this.istogglebutton = !this.istogglebutton;
    console.log(this.istogglebutton);
  }
}
