import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../types/payments.type';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private baseUrl: string = 'http://localhost:3000/ecomm/payments';

  constructor(private httpClient: HttpClient) {}

  fetchPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.baseUrl);
  }
}
