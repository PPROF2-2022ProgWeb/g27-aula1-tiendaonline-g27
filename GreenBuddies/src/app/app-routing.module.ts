import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "perfil", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "**", component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
