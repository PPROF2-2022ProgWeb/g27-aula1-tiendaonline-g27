import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import localeES from "@angular/common/locales/es"
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }