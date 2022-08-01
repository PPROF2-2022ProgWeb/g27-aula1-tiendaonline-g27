import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SliderComponent } from './slider/slider.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NewsletterComponent,
    SliderComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterComponent,
    SliderComponent,
    LoaderComponent
  ]
})

export class SharedModule { }
