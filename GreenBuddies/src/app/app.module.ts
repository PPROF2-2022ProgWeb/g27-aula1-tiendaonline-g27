import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';/* Routing Modules */
import { AppComponent } from './app.component';/*App Root */
import { PagesModule } from './pages/pages.module';
PagesModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
