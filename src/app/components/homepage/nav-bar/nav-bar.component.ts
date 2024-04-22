import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit{
  constructor(private router: Router) {}
  sub = false;
  ShowService: Boolean = false;
  role = localStorage.getItem('role');
  selectedEventType: string = '';
  token: any;
  hideNavBar: any;
  url:any;
  isAdmin:Boolean=false;

  showService() {
    this.ShowService = !this.ShowService;
  }

  showDiv: Boolean = false;

  onclick() {
    this.showDiv = !this.showDiv;
    console.log('btn  clicked!', this.showDiv);
  }
  goSignup() {
    this.router.navigate(['/signup']);
    this.showDiv = false;
  }
  goLogin() {
    this.router.navigate(['/login']);
    this.showDiv = false;
  }
  goAbout() {
    this.router.navigate(['/about']);
    this.showDiv = false;
  }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    if(!this.token || this.role=='user'){
      
    }

    console.log(this.isAdmin,"Is admin");
    if (this.token) {
      this.sub = true;
    }
  }

  changeRoute(): void {
    switch (this.selectedEventType) {
      case 'Wedding':
        console.log('wedding');
        this.router.navigate(['/wedding']);
        break;
      case 'Birthday':
        console.log('birthday');
        this.router.navigate(['/birthday']);
        break;
      case 'Concert':
        this.router.navigate(['/concert']);
        break;
      case 'Meetings':
        this.router.navigate(['/meeting']);
        break;
      default:
        // Handle default case
        break;
    }
    this.ShowService = false;
  }
  Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  goProfile() {
    const rol = localStorage.getItem('role');
    this.router.navigate([`${rol}/profile`]);
  }
}
