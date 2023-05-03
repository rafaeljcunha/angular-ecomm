import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
