import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'details',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'home2',component:Home2Component},
  {path:'shop',component:ShopComponent},
  {path:'category/:id',component:CategoryProductsComponent},
  {path:'product/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
