import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    NosotrosComponent
  ]
})

export class PagesModule { }
