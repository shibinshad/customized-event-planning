import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css'],
})
export class CateringComponent {
  constructor(private userServ: UserService) {}
  catering: any;
  filter: any;
  selectedFilterType: string = '';
  filteredCatering: any[] = [];
  priceFilter: any;
  selectedPriceFilter: any;
  updatedCart: any;

  ngOnInit(): void {
    this.getcatering();
    this.selectCatering(null);
  }
  getcatering() {
    this.userServ.getcatering().subscribe({
      next: (res) => {
        // console.log(res);
        this.catering = res?.catering;
        this.applyFilter();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getFilteredCatering() {
    if (this.selectedPriceFilter === 'lowToHigh') {
      this.filteredCatering = this.catering
        .slice()
        .sort((a: any, b: any) => a.price - b.price);
    } else if (this.selectedPriceFilter === 'highToLow') {
      this.filteredCatering = this.catering
        .slice()
        .sort((a: any, b: any) => b.price - a.price);
    } else {
      this.filteredCatering = [...this.catering];
    }
  }

  applyFilter() {
    this.getFilteredCatering();
    if (this.selectedFilterType) {
      this.filteredCatering = this.filteredCatering.filter((item: any) => {
        return item.Type === this.selectedFilterType;
      });
    }
  }

  selectCatering(id: any) {
    console.log(id);
    this.userServ.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.updatedCart = res.updatedCart.selectedId;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
