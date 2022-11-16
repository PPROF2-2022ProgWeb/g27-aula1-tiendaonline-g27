import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { ProductosAdminComponent } from './productos/productos.component';
import { UsuariosAdminComponent } from './usuarios/usuarios.component';
import { ReportesAdminComponent } from './reportes/reportes.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InfoWrapperComponent,
    FilterWidgetComponent,
    NumericalSummariesComponent,
    NumericalSummariesListComponent,
    TableInfoComponent,
    PieChartComponent,
    BarChartComponent,
    ProductosAdminComponent,
    UsuariosAdminComponent,
    ReportesAdminComponent,
    ArticulosComponent,
    MensajesComponent,
    EditFormComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'productos', pathMatch: 'full', component: ProductosAdminComponent
      },
      {
        path: 'reportes', pathMatch: 'full', component: ReportesAdminComponent
      },
      {
        path: 'usuarios', pathMatch: 'full', component: UsuariosAdminComponent
      }
    ])
  ]
})
export class DashboardModule { }
