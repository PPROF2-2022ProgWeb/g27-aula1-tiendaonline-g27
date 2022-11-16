import { IDashboardReports } from 'src/app/models/dashboard-reports.model';
import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

  @Input() type: "sales_customers" | "balance" | undefined;
  @Input() reports: IDashboardReports | undefined;
  chartDatasets: ChartData<'bar'> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.setAttributes();
    console.log(this.chartDatasets);
  }

  setAttributes() {
    if (this.type === "sales_customers" && this.reports) {
      this.chartDatasets = this.reports.sales_customers;
    }
    if (this.type === "balance" && this.reports) {
      this.chartDatasets = this.reports.balance;
    }
  }

}
