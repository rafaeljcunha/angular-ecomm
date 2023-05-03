import { CartService } from 'src/app/core/services/cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/core/services/summary/summary.service';
import { Cart } from 'src/app/core/types/cart.type';
import { Address } from 'src/app/core/types/address.type';
import { Payment } from 'src/app/core/types/payments.type';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  cartSubTotalPrice = 0;
  cartDeliveryPrice = 0;
  cartTotalPrice = 0;
  @Input() selectedItems = [] as Cart[];
  @Input() selectedAddress: Address | null = null;
  @Input() selectedPayment: Payment = {} as Payment;

  constructor(private summaryService: SummaryService) {
    this.summaryService.getResumeValues();
    this.summaryService.getCartSubTotal().subscribe((value) => {
      this.cartSubTotalPrice = value;
      this.cartDeliveryPrice = this.selectedAddress
        ? this.summaryService.cartDeliveryPrice
        : 0;
      this.cartTotalPrice = value + this.cartDeliveryPrice;
    });
  }
}
