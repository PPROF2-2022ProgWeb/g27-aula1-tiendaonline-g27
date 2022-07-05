import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './shared/slider/slider.component';
import { MinilistadoComponent } from './shared/minilistado/minilistado.component';
import { NewsletterComponent } from './shared/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent , SliderComponent]
})
export class AppModule { }
