import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // A főoldal
  { path: 'products', component: ProductsComponent }, // Termékek listája
  { path: 'navbar', component: NavbarComponent }, // Navbar oldal
  { path: 'login', component: LoginComponent }, // Belépési oldal
  { path: '**', redirectTo: '' } // Ha nincs érvényes útvonal, visszairányít a főoldalra

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
