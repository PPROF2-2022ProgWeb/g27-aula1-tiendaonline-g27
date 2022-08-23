import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numerical-summaries',
  templateUrl: './numerical-summaries.component.html',
  styleUrls: ['./numerical-summaries.component.css']
})

export class NumericalSummariesComponent implements OnInit {

  @Input() summaryType = "";
  ico = "";
  @Input() data = {
    quantity: 16,
    percentage_change: -3
  }

  constructor() { }

  ngOnInit(): void {
    this.setIco();
  }

  setIco() {
    const type = this.summaryType;
    if (type === "sales") { this.ico = "bi bi-cart" }
    else if (type === "revenue") { this.ico = "bi bi-currency-dollar" }
    else if (type === "customers") { this.ico = "bi bi-people" }
    else { this.ico = "bi bi-easel" }
  }

}
