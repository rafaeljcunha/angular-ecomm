import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/core/types/products.type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product = {} as Product;

  constructor(private cartService: CartService) {}

  addProductOnCart(): void {
    this.cartService.addOnCart(this.product).subscribe();
  }
}
