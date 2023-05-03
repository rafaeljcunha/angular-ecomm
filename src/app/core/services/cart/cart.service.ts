import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../../types/cart.type';
import { Product } from '../../types/products.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string = 'http://localhost:3000/ecomm/cart';
  private _cartItemsObservable = new BehaviorSubject([] as Cart[]);
  private event = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {}

  public cartItems(): Observable<Cart[]> {
    return this._cartItemsObservable.asObservable();
  }

  public setCartItems(cartItems: Cart[]) {
    const sortItemPerAddedDate = cartItems.sort((valueA, valueB) =>
      this.sortItems(valueA as Required<Cart>, valueB as Required<Cart>)
    );

    this._cartItemsObservable.next(this.formatCartData(sortItemPerAddedDate));
  }

  public eventObservable(): Observable<any> {
    return this.event.asObservable();
  }

  public setEventObservable(value: any) {
    this.event.next(value);
  }

  sortItems(valueA: Required<Cart>, valueB: Required<Cart>): number {
    if (valueA?.addedAt > valueB?.addedAt) {
      return -1;
    }
    if (valueA?.addedAt < valueB?.addedAt) {
      return 1;
    }
    return 0;
  }

  formatCartData(cartItems: Cart[]): Cart[] {
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

    return Object.assign(updatedItems);
  }

  public fetchCartItems(): void {
    this.httpClient.get<Cart[]>(this.baseUrl).subscribe((cartItems) => {
      this.setCartItems(cartItems);
    });
  }

  addOnCart(product: Cart): Observable<Cart> {
    let body = {
      ...product,
      quantity: 1,
      addedAt: product.addedAt || new Date(),
    };
    delete body.id;
    return this.httpClient.post<Cart>(this.baseUrl, body);
  }

  removeOnCart(cartItemId: number | undefined): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/${cartItemId}`);
  }

  updateQuantity(product: Cart): Observable<Product> {
    return this.httpClient.put<Cart>(`${this.baseUrl}/${product.id}`, {
      ...product,
      quantity: product.quantity + 1,
    });
  }
}
