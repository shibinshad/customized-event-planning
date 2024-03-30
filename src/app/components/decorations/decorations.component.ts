import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css'],
})
export class DecorationsComponent {
  constructor(private userServ: UserService) {}
  decorations: any;
  originalDecorations: any;
  ngOnInit(): void {
    this.getdecorations();
  }
  getdecorations() {
    this.userServ.getdecorations().subscribe({
      next: (res) => {
        console.log(res);
        this.decorations = res?.decorations;
        this.originalDecorations = res?.decorations;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  filterByType(event: any) {
    const selectedType = event.target.value.toLowerCase();
    if (!selectedType) return;
1
    // const originalDecorations = [...this.decorations];
    if(selectedType  === "all"){
      this.decorations = this.originalDecorations;
      return
    }
    this.decorations = this.originalDecorations.filter((decoration: any) => {
        return decoration.Type && decoration.Type.toLowerCase() === selectedType;
    });

}



  sortByPrice(event: any) {
    const order = event.target.value;
    if (!order) return;

    this.decorations.sort((a: { price: number }, b: { price: number }) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
