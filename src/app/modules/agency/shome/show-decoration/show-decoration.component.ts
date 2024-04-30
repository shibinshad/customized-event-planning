import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AgencyService } from '../../service/agency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-decoration',
  templateUrl: './show-decoration.component.html',
  styleUrls: ['./show-decoration.component.css']
})
export class ShowDecorationComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private agencyService: AgencyService,
    private router:Router
  ) {}
  locations = [];
  media: any;
  ngOnInit(): void {
    this.getDecoration();
  }
  getDecoration() {
    this.userServ.getdecorations().subscribe({
      next: (res) => {
        console.log(res);
        this.media = res?.decorations;
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
    this.getDecoration();
  }

  updateService(id: any) {
    this.router.navigate([`/agency/decorationForm/${id}`]);
  }
}
{

}

