import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router: Router) {}

  ShowService:Boolean=false;
  selectedEventType: string=''


  showService(){
    this.ShowService=!this.ShowService
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




  // constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // handleEventTypeChange(event: any): void {
  //   const selectedEventType = event.target.value;
  //   console.log(selectedEventType);
  //   // Assuming you have defined routes in your Angular application
  //   // Navigate to the corresponding route based on the selected event type
  //   switch (selectedEventType) {
  //     case 'wedding':
  //       this.router.navigate(['/user/wedding']);
  //       break;
  //     case 'Birthday':
  //       this.router.navigate(['/birthday']);
  //       break;
  //     // Add cases for other event types if needed
  //     default:
  //       // Default redirection if no specific case matches
  //       this.router.navigate(['/home']);
  //       break;
  //   }
    

  // } 

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
    this.ShowService=false;
  }
}
