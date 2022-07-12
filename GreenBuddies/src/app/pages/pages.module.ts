import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './inicio/components/slider/slider.component';
import { MinilistadoComponent } from './inicio/components/minilistado/minilistado.component';

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    RegistroComponent,
    SliderComponent,
    MinilistadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    RegistroComponent,
    SliderComponent,
    MinilistadoComponent
  ]
})

export class PagesModule { }
