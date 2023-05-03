import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/core/services/payments/payments.service';
import { Payment } from 'src/app/core/types/payments.type';
import { CheckoutService } from '../../services/checkout/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public payments: Payment[] = [] as Payment[];
  public selectedPayment: Payment = {} as Payment;

  constructor(
    private paymentsService: PaymentsService,
    private checkoutService: CheckoutService
  ) {
    checkoutService.getCheckoutPayment().subscribe((payment) => {
      this.selectedPayment = payment;
    });
  }

  setPayment(title: Payment) {
    this.checkoutService.setCheckoutPayment(title);
  }

  ngOnInit(): void {
    this.paymentsService.fetchPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }
}
