import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AgencyService } from '../../service/agency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-catering',
  templateUrl: './show-catering.component.html',
  styleUrls: ['./show-catering.component.css']
})
export class ShowCateringComponent  implements OnInit {
  constructor(
    private userServ: UserService,
    private agencyService: AgencyService,
    private router:Router
  ) {}
  locations = [];
  media: any;
  ngOnInit(): void {
    this.getCatering();
  }
  getCatering() {
    this.userServ.getcatering().subscribe({
      next: (res) => {
        console.log(res);
        this.media = res?.catering;
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
    this.getCatering();
  }

  updateService(id: any) {
    this.router.navigate([`/agency/cateringForm/${id}`]);
  }
}
{

}
