import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { OutsideClickDirective } from '../directives/outside-click.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileBtnComponent } from './components/profile-btn/profile-btn.component';
import { CartBtnComponent } from './components/cart-btn/cart-btn.component';
import { MenuIcoComponent } from './components/menu-ico/menu-ico.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SearchBarComponent,
    OutsideClickDirective,
    ProfileBtnComponent,
    CartBtnComponent,
    MenuIcoComponent,
    MenuListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
