import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/products.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'http://localhost:3000/ecomm/products';

  constructor(private httpClient: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
