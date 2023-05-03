import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { HeaderService } from '../../services/header/header.service';
import { Cart } from '../../types/cart.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItems = 0;
  constructor(
    private cartService: CartService,
    private headerService: HeaderService
  ) {}

  getQuantityCount(accumulator: number, current: Cart) {
    const totalItems = (accumulator += current.quantity || 0);
    return totalItems;
  }

  subscribeTotalItems(value: number) {
    this.totalItems = value;
  }

  subscribeCartItems(cartItems: Cart[]) {
    const totalItems = cartItems.reduce(this.getQuantityCount, 0);
    this.headerService.setTotalItems(totalItems);
    this.headerService
      .getTotalItems()
      .subscribe((value) => this.subscribeTotalItems(value));
  }

  ngOnInit(): void {
    this.cartService.fetchCartItems();
    this.cartService
      .cartItems()
      .subscribe((cartItems) => this.subscribeCartItems(cartItems));
  }
}
