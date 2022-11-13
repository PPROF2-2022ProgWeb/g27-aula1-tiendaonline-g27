import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionUsuarioFinancieroComponent } from './informacion-usuario-financiero.component';

const routes: Routes = [{ path: '', component: InformacionUsuarioFinancieroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionUsuarioFinancieroRoutingModule { }
