import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionUsuarioFinancieroRoutingModule } from './informacion-usuario-financiero-routing.module';
import { InformacionUsuarioFinancieroComponent } from './informacion-usuario-financiero.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    InformacionUsuarioFinancieroComponent
  ],
  imports: [
    CommonModule,
    InformacionUsuarioFinancieroRoutingModule,
    LayoutModule
  ]
})
export class InformacionUsuarioFinancieroModule { }
