import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';
import { FilterWidgetComponent } from './components/filter-widget/filter-widget.component';
import { NumericalSummariesComponent } from './components/numerical-summaries/numerical-summaries.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InfoWrapperComponent,
    FilterWidgetComponent,
    NumericalSummariesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
