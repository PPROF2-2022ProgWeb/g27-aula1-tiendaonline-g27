import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
