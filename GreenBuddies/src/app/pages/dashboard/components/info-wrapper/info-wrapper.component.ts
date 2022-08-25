import { Component, Input, OnInit } from '@angular/core';
import { IDateRange } from '../numerical-summaries/numerical-summaries.component';

@Component({
  selector: 'app-info-wrapper',
  templateUrl: './info-wrapper.component.html',
  styleUrls: ['./info-wrapper.component.css']
})

export class InfoWrapperComponent implements OnInit {
  @Input() title = "";

  constructor() { }
  
  ngOnInit(): void {
  }

}
