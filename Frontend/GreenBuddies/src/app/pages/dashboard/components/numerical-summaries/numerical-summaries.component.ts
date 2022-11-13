import { IDashboardReports } from './../../../../models/dashboard-reports.model';
import { Component, Input, OnInit } from '@angular/core';

export interface IDateRange {
  key: "today" | "this_month" | "this_year",
  text: "Hoy" | "Este mes" | "Este año"
}

@Component({
  selector: 'app-numerical-summaries',
  templateUrl: './numerical-summaries.component.html',
  styleUrls: ['./numerical-summaries.component.css']
})

export class NumericalSummariesComponent implements OnInit {

  @Input() summaryType: 'sales' | 'revenue' | 'customers' = "sales";
  @Input() data: IDashboardReports | undefined;

  dateRange: IDateRange = {
    key: "today",
    text: "Hoy"
  };
  title = "";
  ico = "";

  constructor() { }

  ngOnInit(): void {
    this.setAttributes();
  }

  setAttributes() {
    const type = this.summaryType;
    if (type === "sales") { this.ico = "bi bi-cart", this.title = "Ventas" }
    else if (type === "revenue") { this.ico = "bi bi-currency-dollar", this.title = "Ingresos" }
    else if (type === "customers") { this.ico = "bi bi-people", this.title = "Clientes" }
    else { this.ico = "bi bi-easel" }
  }
  
  setDateRange(date: any) {
    this.dateRange.key = date.key;
    this.dateRange.text = date.text;
  }

}
