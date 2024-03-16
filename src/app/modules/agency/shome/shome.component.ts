import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class ShomeComponent {
  constructor(private userServ: UserService) {}
  media:any;
  ngOnInit(): void {
    this.getmedia()
  }
  getmedia() {
    this.userServ.getmedia().subscribe({
      next: (res) => {
        console.log(res);
        this.media=res?.media;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
