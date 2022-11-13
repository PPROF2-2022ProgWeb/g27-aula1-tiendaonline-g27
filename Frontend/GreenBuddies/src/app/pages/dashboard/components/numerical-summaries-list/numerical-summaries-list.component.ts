import { Component, Input, OnInit } from '@angular/core';
import { IDashboardReports } from 'src/app/models/dashboard-reports.model';

@Component({
  selector: 'app-numerical-summaries-list',
  templateUrl: './numerical-summaries-list.component.html',
  styleUrls: ['./numerical-summaries-list.component.css']
})
export class NumericalSummariesListComponent implements OnInit {

  @Input() reports : IDashboardReports | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
