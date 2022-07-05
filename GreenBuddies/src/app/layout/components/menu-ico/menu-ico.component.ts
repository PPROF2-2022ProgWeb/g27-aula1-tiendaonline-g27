import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-ico',
  template: ``,
  templateUrl: './menu-ico.component.html',
  styleUrls: ['./menu-ico.component.css']
})
export class MenuIcoComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
