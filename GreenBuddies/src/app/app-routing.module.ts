import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarantiaYDevolucionesComponent } from './pages/garantia-y-devoluciones/garantia-y-devoluciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PoliticaDePrivacidadComponent } from './pages/politica-de-privacidad/politica-de-privacidad.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "nosotros", loadChildren: () => import("./pages/nosotros/nosotros.module").then(m => m.NosotrosModule) },
  { path: "perfil", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "terminos-y-condiciones", component: TerminosYCondicionesComponent },
  { path: "politica-de-privacidad", component: PoliticaDePrivacidadComponent },
  { path: "garantia-y-devoluciones", component: GarantiaYDevolucionesComponent },
  { path: "productos", component: ProductosComponent },
  { path: "informacion-usuario-financiero", loadChildren: () => import("./pages/informacion-usuario-financiero/informacion-usuario-financiero.module").then(m => m.InformacionUsuarioFinancieroModule) },
  { path: "**", component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

