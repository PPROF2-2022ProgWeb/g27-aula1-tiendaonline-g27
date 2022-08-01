import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    NewsletterComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterComponent,
    SliderComponent
  ]
})

export class SharedModule { }
