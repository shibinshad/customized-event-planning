import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent {
  constructor(private router:Router) {}
  u(){
    this.router.navigate(['/admin/users'])
  }
  A(){
    this.router.navigate(['/admin/agencies'])
  }
  Ad(){
    this.router.navigate(['/admin/admin'])
  }
  p(){
    this.router.navigate(['/admin/pendingRequest'])
  }
  
  
}
