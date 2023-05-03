import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CheckoutService } from 'src/app/core/services/checkout/checkout.service';
import { SummaryService } from 'src/app/core/services/summary/summary.service';
import { Address } from 'src/app/core/types/address.type';
import { Cart } from 'src/app/core/types/cart.type';
import { Payment } from 'src/app/core/types/payments.type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public selectedPayment = {} as Payment;
  public selectedAddress = {} as Address;
  public selectedItems = [] as Cart[];

  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService
  ) {}

  private getSelectedAddress(): void {
    this.checkoutService.getCheckoutAddress().subscribe((address) => {
      this.selectedAddress = address;
    });
  }

  private getSelectedPayment(): void {
    this.checkoutService.getCheckoutPayment().subscribe((payment) => {
      this.selectedPayment = payment;
    });
  }

  private getSelectedItems(): void {
    this.cartService.cartItems().subscribe((cartItems) => {
      this.selectedItems = cartItems;
    });
  }

  ngOnInit(): void {
    this.getSelectedAddress();
    this.getSelectedPayment();
    this.getSelectedItems();
  }
}
