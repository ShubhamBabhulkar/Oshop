import { AuthService } from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './clientComponent/top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './clientComponent/home/home.component';
import { ProductsComponent } from './clientComponent/products/products.component';
import { ShoppingCartComponent } from './clientComponent/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './clientComponent/check-out/check-out.component';
import { OrderSuccessComponent } from './clientComponent/order-success/order-success.component';
import { MyOrdersComponent } from './clientComponent/my-orders/my-orders.component';
import { AdminProductsComponent } from './clientComponent/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './clientComponent/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './clientComponent/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // NgbModule.forRoot(),
    NgbModule
  ],
  providers: [
    AuthService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
