import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { AdminComponent } from './comps/admin/admin.component';
import { MapComponent } from './comps/map/map.component';
import { LandingComponent } from './comps/landing/landing.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';
import { UserprofileComponent } from './comps/userprofile/userprofile.component';
import { CartComponent } from './comps/cart/cart.component';
import { OrderComponent } from './comps/order/order.component';
import { FooterComponent } from './comps/footer/footer.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { CusOrdersComponent } from './comps/cus-orders/cus-orders.component';
import { TrackDeliveriesComponent } from './track-deliveries/track-deliveries.component';


const routes: Routes = [
  {path: '', redirectTo:'welcome' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'map', component: MapComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'welcome', component:LandingComponent},
  {path: 'categories/:name', component:CategoriesComponent},
  {path: 'product', component: SingleproductComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view_item/', component: SingleproductComponent},
  {path: 'order',component: OrderComponent},
  {path: 'orders',component: CusOrdersComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'checkout', component: CheckoutComponent},

  {path: 'track-deliveries', component: TrackDeliveriesComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
