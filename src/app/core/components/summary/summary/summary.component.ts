import { Component, Input } from '@angular/core';
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
  @Input() public selectedItems: Cart[] = [] as Cart[];
  @Input() public selectedAddress: Address | null = null;
  @Input() public selectedPayment: Payment | null = null;
  public cartSubTotalPrice: number = 0;
  public cartDeliveryPrice: number = 0;
  public cartTotalPrice: number = 0;

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
