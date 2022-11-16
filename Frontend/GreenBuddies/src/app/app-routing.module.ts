import { CheckoutComponent } from './pages/checkout/checkout.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GarantiaYDevolucionesComponent } from "./pages/garantia-y-devoluciones/garantia-y-devoluciones.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";
import { PoliticaDePrivacidadComponent } from "./pages/politica-de-privacidad/politica-de-privacidad.component";
import { ProductosComponent } from "./pages/productos/productos.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { TerminosYCondicionesComponent } from "./pages/terminos-y-condiciones/terminos-y-condiciones.component";
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { CarritoComponent } from "./pages/carrito/carrito.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { AuthGuard } from "./guards/auth.guard";
import { UserInfoComponent } from './pages/dashboard/user-info/user-info.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MiscomprasComponent } from './pages/miscompras/miscompras.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "nosotros", loadChildren: () => import("./pages/nosotros/nosotros.module").then(m => m.NosotrosModule) },
  { path: "perfil", component: PerfilComponent, canActivate: [AuthGuard], data: { role: "any" } },
  { path: "login", component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [IsLoggedGuard] },
  { path: "terminos-y-condiciones", component: TerminosYCondicionesComponent },
  { path: "politica-de-privacidad", component: PoliticaDePrivacidadComponent },
  { path: "garantia-y-devoluciones", component: GarantiaYDevolucionesComponent },
  { path: "productos", component: ProductosComponent },
  { path: "productos/:name", component: ProductosComponent },
  { path: "informacion-usuario-financiero", loadChildren: () => import("./pages/informacion-usuario-financiero/informacion-usuario-financiero.module").then(m => m.InformacionUsuarioFinancieroModule) },
  { path: "producto/:id", loadChildren: () => import("./pages/detalle-producto/detalle-producto.module").then(m => m.DetalleProductoModule) },
  { path: "ayuda", component: AyudaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "user-info", component: UserInfoComponent},
  { path: "admin", loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard], data: { role: "ROLE_ADMIN" }},
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard], data: { role: "any" } },
  { path: "blog", component: BlogComponent},
  { path: "miscompras",component: MiscomprasComponent},
  { path: "**", component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, IsLoggedGuard]
})
export class AppRoutingModule { }
