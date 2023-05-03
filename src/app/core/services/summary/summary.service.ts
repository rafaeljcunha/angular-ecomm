import { BehaviorSubject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../../types/cart.type';
import { Address } from '../../types/address.type';
import { Payment } from '../../types/payments.type';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private _cartSubTotalPrice = new BehaviorSubject(0);
  private _cartTotalPrice = new BehaviorSubject(0);
  public cartDeliveryPrice = 0;
  private _summaryAddress = new BehaviorSubject({} as Address);
  private _summaryPayment = new BehaviorSubject<Payment>({} as Payment);

  constructor(private cartService: CartService) {}

  getResumeValues() {
    this.cartService.cartItems().subscribe((cartItems) => {
      const subTotal = cartItems.reduce(
        (accumulator: number, current: Cart) => {
          return (accumulator += current.price * current.quantity);
        },
        0
      );
      this.setCartSubTotal(subTotal);
      this.cartDeliveryPrice = Math.floor(Math.random() * 10) + 1;
    });
  }

  getCartSubTotal() {
    return this._cartSubTotalPrice.asObservable();
  }

  setCartSubTotal(value: number) {
    this._cartSubTotalPrice.next(value);
  }

  getCartTotal() {
    return this._cartTotalPrice.asObservable();
  }

  setCartTotal(value: number) {
    this._cartTotalPrice.next(value);
  }
}
