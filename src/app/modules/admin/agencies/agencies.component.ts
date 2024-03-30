import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent {
  constructor(private adminServ: AdminService) {}
  users :any;
   ngOnInit(): void {
     this.getUsersList();
   }
   getUsersList() {
     this.adminServ.getAgency().subscribe({
       next: (res:any) => {
         console.log(res);
         this.users=res
         console.log(this.users);
       },
       error: (err) => {
         console.log(err);
       },
     });
   }
}
