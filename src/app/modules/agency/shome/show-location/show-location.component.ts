import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AgencyService } from '../../service/agency.service';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private agencyService: AgencyService,
    private router:Router
  ) {}
  locations = [];
  media: any;
  ngOnInit(): void {
    this.getLocation();
  }
  getLocation() {
    this.userServ.getLocation().subscribe({
      next: (res) => {
        console.log(res);
        this.media = res?.location;
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
    this.getLocation();
  }

  updateService(id: any) {
    this.router.navigate([`/agency/mediaForm/${id}`]);
  }
}
{

}

