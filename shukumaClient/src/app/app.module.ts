import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent} from './comps/register/register.component'
import { LoginComponent } from './comps/login/login.component';
import { AdminComponent } from './comps/admin/admin.component';
import { HomeComponent } from './comps/home/home.component';
import { MapComponent } from './comps/map/map.component';
import { LandingComponent } from './comps/landing/landing.component';
import { ProductCardComponent } from './comps/product-card/product-card.component';
import { ProductsComponent } from './comps/products/products.component';

import { ProductComponent } from './comps/product/product.component';

import { CartComponent } from './comps/cart/cart.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { NavComponent } from './comps/nav/nav.component';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';
import { FooterComponent } from './comps/footer/footer.component';
import { UserprofileComponent } from './comps/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    AdminComponent,
    HomeComponent,
    MapComponent,
    LandingComponent,
    ProductCardComponent,
    ProductsComponent,
    FooterComponent,
    SingleproductComponent,
    ProductComponent,
    UserprofileComponent,
    CartComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
