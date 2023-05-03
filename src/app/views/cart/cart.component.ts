import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { FooterService } from 'src/app/core/services/footer/footer.service';
import { HeaderService } from 'src/app/core/services/header/header.service';
import { Cart, CartEvents } from 'src/app/core/types/cart.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  public cartItems = [] as Cart[];
  public cartTotalItems = 0;

  constructor(
    private cartService: CartService,
    private footerService: FooterService,
    private headerService: HeaderService
  ) {
    this.eventEmitter();
  }

  eventEmitter() {
    this.cartService.eventObservable().subscribe((value: any) => {
      if (value.event === CartEvents.UPDATE_QUANTITY) {
        this.updateQuantity(value.product, value.method);
      }
    });
  }

  setTotalItems(method: string): number {
    return method === 'add' ? this.cartTotalItems + 1 : this.cartTotalItems - 1;
  }

  updateTotalItems(totalItems: number) {
    this.cartTotalItems = totalItems;
  }

  updateCartHeaderTotalItems(method: string) {
    this.headerService
      .getTotalItems()
      .subscribe((value) => this.updateTotalItems(value));

    const cartTotalItems = this.setTotalItems(method);
    this.updateTotalItems(cartTotalItems);
    this.headerService.setTotalItems(this.cartTotalItems);
  }

  updateQuantity(product: Cart, method: string) {
    if (method === 'add') return this.addItem(product);
    return this.removeItem(product);
  }

  getCartItems(): void {
    this.cartService.fetchCartItems();
    this.cartService.cartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  addItem(product: Cart): void {
    this.cartService.addOnCart(product).subscribe((product) => {
      this.cartService.fetchCartItems();
      this.cartService.cartItems().subscribe((cartItems) => {
        this.cartItems = cartItems;
      });
    });
  }

  removeItem(product: Cart): void {
    this.cartService.removeOnCart(product.id).subscribe(() => {
      this.cartService.fetchCartItems();
      this.cartService.cartItems().subscribe((cartItems) => {
        this.cartItems = cartItems;
      });
    });
  }

  ngOnInit(): void {
    this.getCartItems();
    this.footerService.setCheckoutButton(true);
  }

  ngOnDestroy(): void {
    this.footerService.setCheckoutButton(false);
  }
}
