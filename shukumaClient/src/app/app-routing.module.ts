import { NgModule } from '@angular/core';
// import { HomeComponent } from './comps/BusinessUI/home/home.component';
import { NavComponent } from './comps/UserUI/nav/nav.component';
import {HomeComponent} from './comps/UserUI/homeUser/homeUser.component'
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './comps/UserUI/register/register.component';
import { LoginComponent } from './comps/UserUI/login/login.component';
import { AdminComponent } from './comps/UserUI/admin/admin.component';
import { MapComponent } from './comps/UserUI/map/map.component';
import { LandingComponent } from './comps/UserUI/landing/landing.component';
import { CategoriesComponent } from './comps/UserUI/categories/categories.component';
import { SingleproductComponent } from './comps/UserUI/singleproduct/singleproduct.component';
import { UserprofileComponent } from './comps/UserUI/userprofile/userprofile.component';
import { CartComponent } from './comps/UserUI/cart/cart.component';
import { OrderComponent } from './comps/UserUI/order/order.component';
import { FooterComponent } from './comps/UserUI/footer/footer.component';
import { CheckoutComponent } from './comps/UserUI/checkout/checkout.component';
import { CusOrdersComponent } from './comps/UserUI/cus-orders/cus-orders.component';
import { SingleOrderComponent } from './comps/UserUI/single-order/single-order.component';
// import { TrackingDeliveriesComponent } from './comps/UserUI/track-deliveries/track-deliveries.component';
import { SettingsComponent } from './comps/UserUI/settings/settings.component';


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



  // {path: 'tracking', component: TrackDeliveriesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'vieworder', component: SingleOrderComponent},
  {path: 'nav', component: NavComponent}

  // Driver Routes


];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
