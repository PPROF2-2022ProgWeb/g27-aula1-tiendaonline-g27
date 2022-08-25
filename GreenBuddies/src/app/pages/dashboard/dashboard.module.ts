import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';
import { FilterWidgetComponent } from './components/filter-widget/filter-widget.component';
import { NumericalSummariesComponent } from './components/numerical-summaries/numerical-summaries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumericalSummariesListComponent } from './components/numerical-summaries-list/numerical-summaries-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InfoWrapperComponent,
    FilterWidgetComponent,
    NumericalSummariesComponent,
    NumericalSummariesListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
