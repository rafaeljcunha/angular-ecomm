import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address/address.service';
import { Address } from 'src/app/core/types/address.type';
import { CheckoutService } from '../../services/checkout/checkout.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  public addresses: Address[] = [] as Address[];
  public selectedAddress = {} as Address;

  constructor(
    private addressService: AddressService,
    private checkoutService: CheckoutService
  ) {
    checkoutService.getCheckoutAddress().subscribe((address) => {
      this.selectedAddress = address;
    });
  }

  getAddresses() {
    this.addressService.fetchAddress().subscribe((addresses) => {
      this.addresses = addresses;
    });
  }

  public setAddress(address: Address) {
    this.checkoutService.setCheckoutAddress(address);
  }

  ngOnInit(): void {
    this.getAddresses();
  }
}
