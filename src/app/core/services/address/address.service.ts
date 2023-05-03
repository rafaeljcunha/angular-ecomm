import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../../types/address.type';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseUrl: string = 'http://localhost:3000/ecomm/address';

  constructor(private httpService: HttpClient) {}

  fetchAddress(): Observable<Address[]> {
    return this.httpService.get<Address[]>(this.baseUrl);
  }
}
