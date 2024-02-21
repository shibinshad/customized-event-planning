import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router: Router) {}

  showEventType:Boolean=false;

  showEventTypeFn(){
    this.showEventType=!this.showEventType
  }

  showDiv: Boolean = false;
  

  onclick() {
    this.showDiv = !this.showDiv;
    console.log('btn  clicked!', this.showDiv);
    
  }
  goSignup(){
    this.router.navigate(['/signup']);
    this.showDiv=false;
  }
  goLogin(){
    this.router.navigate(['/login']);
    this.showDiv=false;
  }
  goAbout(){
    this.router.navigate(['/about']);
    this.showDiv=false;
  }
  
}
