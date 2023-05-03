import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private _showCheckoutButton = new BehaviorSubject(false);

  constructor() {}

  getCheckoutButton() {
    return this._showCheckoutButton.asObservable();
  }

  setCheckoutButton(value: boolean) {
    this._showCheckoutButton.next(value);
  }
}
