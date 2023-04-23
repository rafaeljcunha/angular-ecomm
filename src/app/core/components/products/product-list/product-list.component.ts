import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/types/products.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products = [] as Product[];
}
