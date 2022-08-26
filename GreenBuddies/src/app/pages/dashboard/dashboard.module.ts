import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';
import { FilterWidgetComponent } from './components/filter-widget/filter-widget.component';
import { NumericalSummariesComponent } from './components/numerical-summaries/numerical-summaries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumericalSummariesListComponent } from './components/numerical-summaries-list/numerical-summaries-list.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InfoWrapperComponent,
    FilterWidgetComponent,
    NumericalSummariesComponent,
    NumericalSummariesListComponent,
    TableInfoComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
