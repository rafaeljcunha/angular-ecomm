import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Cart } from 'src/app/core/types/cart.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [] as Cart[];

  constructor(private cartService: CartService) {}

  formatCartData(cartItems: Cart[]): void {
    const mappedItems = cartItems.reduce((accumulator: any, item: Cart) => {
      if (accumulator[item.title]) {
        accumulator[item.title] = {
          ...item,
          quantity: accumulator[item.title].quantity + 1,
        };
      } else {
        accumulator[item.title] = item;
      }
      return accumulator;
    }, {});

    const updatedItems = Object.values(mappedItems);
    console.log(updatedItems);
    this.cartItems = Object.assign(updatedItems);
  }

  ngOnInit(): void {
    this.cartService
      .fetchCartItems()
      .subscribe((cartItems) => this.formatCartData(cartItems));
  }
}
