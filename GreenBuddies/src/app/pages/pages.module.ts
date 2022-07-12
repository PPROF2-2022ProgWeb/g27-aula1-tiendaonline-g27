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

@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    SliderComponent,
    MinilistadoComponent
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
    MinilistadoComponent
  ]
})

export class PagesModule { }
