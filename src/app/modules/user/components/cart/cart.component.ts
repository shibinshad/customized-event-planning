import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormValidationService } from '../../services/form-validation.service';
import { UserService } from 'src/app/service/user.service';
import { SharedService } from 'src/app/modules/shared/service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  constructor(
    private userServ: FormValidationService,
    private service:UserService
  ) {}
  products: any;
  totalPrice: any;
  taxPrice: any;
  totalCost: any;
  showPopUp: Boolean = false;
  serviceId : any;
  DisPrice:any
  showDetailsAmount:Boolean=false;

  ngOnInit(): void {
    this.getOrders();
  }

  handleDecline(data:any) {
    this.showPopUp=data;
    console.log(data);
  }
  handleConfirm(data:any){
    if(data==true){

    this.service.addToCart(this.serviceId).subscribe({
      next: (res) => {
        console.log(res);
        this.getOrders()
        this.showPopUp=false;
      },
      error: (err) => {
        console.log(err);
        this.showPopUp=false;
      },
    });
    }
  }
  
  getOrders() {
    this.userServ.getOrders().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.orders[0].products;
        console.log(this.products);
        this.totalPrice = this.products.reduce(
          (total: any, product: any) => total + product.price,
          0
        );
        this.taxPrice = Math.round((this.totalPrice * 15) / 100);
        this.DisPrice = Math.round((this.totalPrice * 3) / 100);

        this.totalCost = this.totalPrice + this.taxPrice - this.DisPrice  ;
        console.log(this.totalPrice);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  

  removeFromcart(id: any) {
    this.serviceId=id;
    this.showPopUp = true;
  }
}
