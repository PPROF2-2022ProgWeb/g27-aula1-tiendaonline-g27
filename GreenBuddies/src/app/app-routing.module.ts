import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "nosotros", loadChildren: () => import("./pages/nosotros/nosotros.module").then(m => m.NosotrosModule)},
  {path: "perfil", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "productos", component: ProductosComponent},
  {path: "**", component: InicioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

