import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SliderComponent } from './slider/slider.component';
import { LoaderComponent } from './loader/loader.component';
import { SmHorizontalCardComponent } from './sm-horizontal-card/sm-horizontal-card.component';

@NgModule({
  declarations: [
    NewsletterComponent,
    SliderComponent,
    LoaderComponent,
    SmHorizontalCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterComponent,
    SliderComponent,
    LoaderComponent,
    SmHorizontalCardComponent
  ]
})

export class SharedModule { }
