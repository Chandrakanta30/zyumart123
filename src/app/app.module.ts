import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentErrorComponent } from './payment-error/payment-error.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { AddressComponent } from './address/address.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';
import { UserInvoicesDetailsComponent } from './user-invoices-details/user-invoices-details.component';
import { Home2Component } from './home2/home2.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryProductsComponent } from './category-products/category-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderTrackingComponent,
    ShippingComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentErrorComponent,
    UserInformationComponent,
    AddressComponent,
    UserInvoicesComponent,
    UserInvoicesDetailsComponent,
    Home2Component,
    ShopComponent,
    CategoryProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
