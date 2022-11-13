import { IDashboardReports } from 'src/app/models/dashboard-reports.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  @Input() reports: IDashboardReports | undefined;
  @Input() type: "budget" | "web_traffic" | undefined;

  chartLabels: string[] | undefined;
  chartDatasets = [{ data: [1, 2, 3] }]

  constructor() { }

  ngOnInit(): void {
    this.setAttributes();
  }

  setAttributes() {
    if (this.type === "budget" && this.reports) {
      this.chartLabels = this.reports.budget.labels;
      this.chartDatasets = [{ data: this.reports.budget.data }]
    }
    if (this.type === "web_traffic" && this.reports) {
      this.chartLabels = this.reports.website_traffic.labels;
      this.chartDatasets = [{ data: this.reports.website_traffic.data }]
    }
  }

}
