import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
