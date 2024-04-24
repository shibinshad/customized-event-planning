import { Component, OnInit } from '@angular/core';
import { FormValidationService } from '../../services/form-validation.service';
import { UserService } from 'src/app/service/user.service';
import { paymentService } from 'src/app/service/payment.service';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private userServ: FormValidationService,
    private service: UserService,
    private razorpayService: paymentService
  ) {}
  products: any;
  totalPrice: any;
  taxPrice: any;
  totalCost: any;
  showPopUp: Boolean = false;
  serviceId: any;
  DisPrice: any;
  showDetailsAmount: Boolean = false;
  orderId: any;
  data: any;

  ngOnInit(): void {
    this.getOrders();
  }

  handleDecline(data: any) {
    this.showPopUp = data;
    console.log(data);
  }
  handleConfirm(data: any) {
    if (data == true) {
      this.service.addToCart(this.serviceId).subscribe({
        next: (res) => {
          console.log(res);
          this.getOrders();
          this.showPopUp = false;
        },
        error: (err) => {
          console.log(err);
          this.showPopUp = false;
        },
      });
    }
  }

  getOrders() {
    this.userServ.getOrders().subscribe({
      next: (res) => {
        this.products = res.orders[0].products;
        this.totalPrice = this.products.reduce(
          (total: any, product: any) => total + product.price,
          0
        );
        this.taxPrice = Math.round((this.totalPrice * 15) / 100);
        this.DisPrice = Math.round((this.totalPrice * 3) / 100);

        this.totalCost = this.totalPrice + this.taxPrice - this.DisPrice;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromcart(id: any) {
    this.serviceId = id;
    this.showPopUp = true;
  }

  payNow(totalPrice: any) {
    this.razorpayService.createOrder(totalPrice).subscribe({
      next: (res) => {
        this.orderId = res.id;
        const options = {
          key: 'rzp_test_ENM5KKKJfCFkZo',
          amount: totalPrice * 100,
          currency: 'INR',
          name: 'customcrazeCreations',
          order_id: this.orderId,
          handler: (response: any) => {
            console.log(response);
            this.paymentResponse(response);
          },
        };
        const rzp = new Razorpay(options);
        rzp.open();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  paymentResponse(data: any) {
    this.data = data;
    this.razorpayService.successPayment(this.data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
