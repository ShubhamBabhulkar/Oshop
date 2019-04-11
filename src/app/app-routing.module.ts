import { MyOrdersComponent } from './clientComponent/my-orders/my-orders.component';
import { AdminOrdersComponent } from './clientComponent/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './clientComponent/admin/admin-products/admin-products.component';
import { LoginComponent } from './clientComponent/login/login.component';
import { CheckOutComponent } from './clientComponent/check-out/check-out.component';
import { OrderSuccessComponent } from './clientComponent/order-success/order-success.component';
import { ShoppingCartComponent } from './clientComponent/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './clientComponent/products/products.component';
import { HomeComponent } from './clientComponent/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
