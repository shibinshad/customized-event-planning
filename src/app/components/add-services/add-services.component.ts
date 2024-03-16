import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent {
  constructor(private router:Router){}
  goLoc(){
    this.router.navigate(['/locations'])
    console.log('btn clikced')
  }
}
