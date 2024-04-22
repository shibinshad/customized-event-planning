import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css'],
})
export class PendingRequestComponent implements OnInit {
  constructor(private adminServ: AdminService) {}
  pendingUser: any;
  ngOnInit(): void {
    this.getPendingUser();
  }

  getPendingUser() {
    this.adminServ.getPendingUsers().subscribe({
      next: (res) => {
        this.pendingUser = res.pendingUsers;
        console.log(this.pendingUser);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  approve(userId: any) {
    this.adminServ.approveUser(userId).subscribe({
      next: (res) => {
        console.log(res);
        this.getPendingUser();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
