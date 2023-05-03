import { Component, Input } from '@angular/core';
import { Address } from 'src/app/core/types/address.type';
import { Cart } from 'src/app/core/types/cart.type';
import { Payment } from 'src/app/core/types/payments.type';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  @Input() selectedItems = [] as Cart[];
  @Input() selectedAddress: Address | null = null;
  @Input() selectedPayment: Payment = {} as Payment;
}
