import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { SliderComponent } from './inicio/components/slider/slider.component';
import { MinilistadoComponent } from './inicio/components/minilistado/minilistado.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad/politica-de-privacidad.component';
import { GarantiaYDevolucionesComponent } from './garantia-y-devoluciones/garantia-y-devoluciones.component';
import { ProductosComponent } from '../pages/productos/productos.component';
import { CardsComponent } from './productos/cards/cards.component';
import { AyudaComponent } from './ayuda/ayuda.component';


@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    SliderComponent,
    MinilistadoComponent,
    TerminosYCondicionesComponent,
    PoliticaDePrivacidadComponent,
    GarantiaYDevolucionesComponent,
    ProductosComponent,
    CardsComponent,
    AyudaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    SliderComponent,
    MinilistadoComponent,
    ProductosComponent
  ]
})

export class PagesModule { }
