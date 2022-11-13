import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() title: string = "Green Buddies";
  @Input() description: string = "";
  @Input() isTop: boolean = false;
  @Input() hasMargin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
