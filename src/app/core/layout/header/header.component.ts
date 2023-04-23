import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { BehaviorSubject } from 'rxjs';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.fetchCartItems().subscribe((cartItems) => {
      this.itemsQuantity = cartItems.length;
    });
  }
}
