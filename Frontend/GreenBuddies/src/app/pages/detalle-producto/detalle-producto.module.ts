import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductoComponent } from './detalle-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DetalleProductoModule { }
