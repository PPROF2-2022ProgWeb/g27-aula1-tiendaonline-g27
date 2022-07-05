import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    NosotrosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    NosotrosComponent,
    LoginComponent,
    RegistroComponent
  ]
})

export class PagesModule { }
