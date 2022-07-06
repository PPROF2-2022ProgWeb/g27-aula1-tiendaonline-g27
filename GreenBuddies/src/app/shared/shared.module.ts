import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinilistadoComponent } from './minilistado/minilistado.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    MinilistadoComponent,
    NewsletterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinilistadoComponent,
    NewsletterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
