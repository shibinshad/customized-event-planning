import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private adminServ: AdminService) {}
 users :any;
  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList() {
    this.adminServ.getUsers().subscribe({
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
