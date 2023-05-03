import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { Cart } from '../../types/cart.type';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public totalItemsObservable = new BehaviorSubject<number>(0);

  getTotalItems(): Observable<number> {
    return this.totalItemsObservable.asObservable();
  }

  setTotalItems(value: number): void {
    this.totalItemsObservable.next(value);
  }
}
