import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-wrapper',
  templateUrl: './info-wrapper.component.html',
  styleUrls: ['./info-wrapper.component.css']
})

export class InfoWrapperComponent implements OnInit {
  @Input() title = "";
  dateRange = "Hoy";

  constructor() { }
  
  ngOnInit(): void {
  }

  setDateRange(date : string) {
    this.dateRange = date;
  }

}
