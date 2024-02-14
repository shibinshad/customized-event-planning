import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router){}

  showDiv: Boolean = false;

  onclick() {
    this.showDiv =!this.showDiv;
    console.log('btn  clicked!', this.showDiv);
  }
  // goLogin(){
  //   this.router.navigate(['login']);
  // }
}
