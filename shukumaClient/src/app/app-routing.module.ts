import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { AdminComponent } from './comps/admin/admin.component';
import { MapComponent } from './comps/map/map.component';
import { LandingComponent } from './comps/landing/landing.component';
import { UserprofileComponent } from './comps/userprofile/userprofile.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { FooterComponent } from './comps/footer/footer.component';
import { SingleproductComponent } from './comps/singleproduct/singleproduct.component';


const routes: Routes = [
  {path: '', redirectTo:'welcome' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'map', component: MapComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'welcome', component:LandingComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'product', component: SingleproductComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
