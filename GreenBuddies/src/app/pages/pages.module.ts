import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { MinilistadoComponent } from './inicio/components/minilistado/minilistado.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad/politica-de-privacidad.component';
import { GarantiaYDevolucionesComponent } from './garantia-y-devoluciones/garantia-y-devoluciones.component';
import { ProductosComponent } from '../pages/productos/productos.component';
import { CardsComponent } from './productos/cards/cards.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    MinilistadoComponent,
    TerminosYCondicionesComponent,
    PoliticaDePrivacidadComponent,
    GarantiaYDevolucionesComponent,
    ProductosComponent,
    CardsComponent,
    AyudaComponent,
    ContactoComponent,
    CarritoComponent,
    PerfilComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    MinilistadoComponent,
    ProductosComponent,
    PerfilComponent
  ]
})

export class PagesModule { }
