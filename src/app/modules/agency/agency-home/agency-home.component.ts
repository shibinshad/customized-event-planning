import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-home',
  templateUrl: './agency-home.component.html',
  styleUrls: ['./agency-home.component.css']
})
export class AgencyHomeComponent implements OnInit{
  showLoading:any;
ngOnInit(): void {
  this.showLoading=true;
    setTimeout(() => {
      this.showLoading=false;
    }, 1500);
}
  
}
