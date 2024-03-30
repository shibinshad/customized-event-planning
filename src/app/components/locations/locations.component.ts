import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  constructor(private userServ: UserService) {}
  locations: any;

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.userServ.getLocation().subscribe({
      next: (res) => {
        console.log(res);
        this.locations = res?.location; // Adding null check here
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sortByPrice(event: any) {
    const order = event.target.value;
    if (!this.locations) return; // Ensure locations is not null
    this.locations.sort((a: { price: number }, b: { price: number }) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
