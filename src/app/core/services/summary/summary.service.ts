import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../../types/cart.type';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private _cartSubTotalPrice = new BehaviorSubject(0);
  private _cartTotalPrice = new BehaviorSubject(0);
  public cartDeliveryPrice = 0;

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
