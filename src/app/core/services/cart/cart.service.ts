import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Cart } from '../../types/cart.type';
import { Product } from '../../types/products.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string = 'http://localhost:3000/ecomm/cart';

  constructor(private httpClient: HttpClient) {}

  fetchCartItems(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.baseUrl);
  }

  addOnCart(product: Product): Observable<Cart> {
    let body = {
      ...product,
      productId: product.id,
      quantity: 1,
    };
    delete body.id;
    return this.httpClient.post<Cart>(this.baseUrl, body);
  }

  removeOnCart(cartItemId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/${cartItemId}`);
  }

  updateQuantity(product: Cart, method: string): Observable<Product> {
    const updateItemQuantity: number =
      method === 'add' ? product.quantity + 1 : product.quantity - 1;

    return this.httpClient.put<Product>(`${this.baseUrl}/${product.id}`, {
      ...product,
      quantity: updateItemQuantity,
    });
  }
}
