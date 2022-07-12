import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})

=======
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
>>>>>>> 9e448275679ca9e074837a29c8e7a85fc453feab
export class SharedModule { }
