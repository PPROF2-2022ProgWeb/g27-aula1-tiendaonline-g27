import { IDashboardReports } from './../../../../models/dashboard-reports.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})

export class TableInfoComponent implements OnInit {

  @Input() type : "recent_sales" | "top_selling" | undefined;
  @Input() data : IDashboardReports | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
