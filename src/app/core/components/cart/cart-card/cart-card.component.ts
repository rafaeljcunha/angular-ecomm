import { CartService } from 'src/app/core/services/cart/cart.service';
import { Cart, CartEvents } from './../../../types/cart.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css'],
})
export class CartCardComponent implements OnInit {
  @Input() public product = {} as Cart;
  public itemPrice = 0;
  public productQuantity = 0;
  totalItems = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemPrice = this.product.price * this.product.quantity;
    this.productQuantity = this.product.quantity;
  }

  updateQuantity(method: string) {
    const productQuantity =
      method === 'add' ? this.product.quantity + 1 : this.product.quantity - 1;
    const produtoWithQuantity = {
      ...this.product,
      quantity: productQuantity,
    };

    this.cartService.setEventObservable({
      product: produtoWithQuantity,
      event: CartEvents.UPDATE_QUANTITY,
      method,
    });
  }
}
