import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent} from './comps/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './comps/admin/admin.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HomeComponent } from './comps/home/home.component';
import { LandingComponent } from './comps/landing/landing.component';
import { LoginComponent } from './comps/login/login.component';
import { MapComponent } from './comps/map/map.component';
import { NavComponent } from './comps/nav/nav.component';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';
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
    FooterComponent,

    SingleproductComponent,
    UserprofileComponent,
    CategoriesComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
4