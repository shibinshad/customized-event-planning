import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  showDiv: Boolean = false;

  onclick() {
    this.showDiv = !this.showDiv;
    console.log('btn  clicked!', this.showDiv);
  }
  
}
