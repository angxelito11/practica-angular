import { Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: "lista-productos", component: ListaProductosComponent},
    { path: "", component: HomeComponent},
    { path: "Login", component: LoginComponent}
];
