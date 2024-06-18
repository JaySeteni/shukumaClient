import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent} from './comps/register/register.component'
import { LoginComponent } from './comps/login/login.component';
import { NavComponent } from './comps/nav/nav.component';
import { AdminComponent } from './comps/admin/admin.component';
import { HomeComponent } from './comps/home/home.component';
import { MapComponent } from './comps/map/map.component';
import { LandingComponent } from './comps/landing/landing.component';
import { FooterComponent } from './comps/footer/footer.component';
import { UserprofileComponent } from './comps/userprofile/userprofile.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';


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
