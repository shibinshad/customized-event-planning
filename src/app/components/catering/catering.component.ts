import { Component } from '@angular/core';
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
  selectedPriceFilter:any

  ngOnInit(): void {
    this.getcatering();
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
      this.filteredCatering = this.catering.slice().sort((a: any, b: any) => a.price - b.price);
    } else if (this.selectedPriceFilter === 'highToLow') {
      this.filteredCatering = this.catering.slice().sort((a: any, b: any) => b.price - a.price);
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
  
  


  
}
