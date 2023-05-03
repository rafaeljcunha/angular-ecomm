import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { CartComponent } from './views/cart/cart.component';
import { ProductCardComponent } from './core/components/products/product-card/product-card.component';
import { HomeCardComponent } from './core/components/home/home-card/home-card.component';
import { HomeCardListComponent } from './core/components/home/home-card-list/home-card-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductListComponent } from './core/components/products/product-list/product-list.component';
import { CartCardComponent } from './core/components/cart/cart-card/cart-card.component';
import { CartListComponent } from './core/components/cart/cart-list/cart-list.component';
import { OrdersComponent } from './views/orders/orders/orders.component';
import { OrderComponent } from './views/order/order/order.component';
import { SummaryComponent } from './core/components/summary/summary/summary.component';
import { StepperComponent } from './core/components/stepper/stepper/stepper.component';
import { CheckoutComponent } from './views/checkout/checkout/checkout.component';
import { AddressComponent } from './core/components/address/address.component';
import { PaymentComponent } from './core/components/payment/payment.component';
import { ConfirmationComponent } from './core/components/confirmation/confirmation.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductCardComponent,
    HomeCardComponent,
    HomeCardListComponent,
    ProductListComponent,
    CartCardComponent,
    CartListComponent,
    AddressComponent,
    PaymentComponent,
    ConfirmationComponent,
    OrdersComponent,
    OrderComponent,
    SummaryComponent,
    StepperComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatRadioModule,
    MatStepperModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
