import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from '../../types/address.type';
import { Payment } from '../../types/payments.type';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private checkoutAddress = new BehaviorSubject({} as Address);
  private checkoutPayment = new BehaviorSubject<Payment>({} as Payment);

  constructor() {}

  getCheckoutAddress() {
    return this.checkoutAddress.asObservable();
  }

  setCheckoutAddress(value: Address) {
    this.checkoutAddress.next(value);
  }

  getCheckoutPayment() {
    return this.checkoutPayment.asObservable();
  }

  setCheckoutPayment(value: Payment) {
    this.checkoutPayment.next(value);
  }
}
