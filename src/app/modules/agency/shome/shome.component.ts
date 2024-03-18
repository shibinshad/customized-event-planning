import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AgencyService } from '../service/agency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css'],
})
export class ShomeComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private agencyService: AgencyService,
    private router:Router
  ) {}
  locations = [];
  media: any;
  ngOnInit(): void {
    this.getmedia();
  }
  getmedia() {
    this.userServ.getmedia().subscribe({
      next: (res) => {
        console.log(res);
        this.media = res?.media;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteItem(id: number) {
    this.agencyService.deleteService(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getmedia();
  }

  updateService(id: any) {
    this.router.navigate([`/agency/mediaForm/${id}`]);
  }
}
