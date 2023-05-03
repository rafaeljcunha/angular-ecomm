import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { HeaderService } from 'src/app/core/services/header/header.service';
import { Product } from 'src/app/core/types/products.type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product = {} as Product;
  totalItems = 0;

  constructor(
    private cartService: CartService,
    private headerService: HeaderService
  ) {}

  subscribeTotalItems(value: number) {
    this.totalItems = value;
  }

  addProductToCart(): void {
    const product = { ...this.product, quantity: 1 };
    this.cartService.addOnCart(product).subscribe(() => {
      this.headerService
        .getTotalItems()
        .subscribe((value) => this.subscribeTotalItems(value));
      this.headerService.setTotalItems(this.totalItems + 1);
    });
  }
}
