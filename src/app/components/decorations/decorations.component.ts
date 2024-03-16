import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent {
  constructor(private userServ: UserService) {}
  decorations:any;
  ngOnInit(): void {
    this.getdecorations()
  }
  getdecorations() {
    this.userServ.getdecorations().subscribe({
      next: (res) => {
        console.log(res);
        this.decorations=res?.decorations;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
