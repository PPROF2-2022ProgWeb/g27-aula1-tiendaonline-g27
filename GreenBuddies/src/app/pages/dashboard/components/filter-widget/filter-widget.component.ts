import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.css']
})

export class FilterWidgetComponent implements OnInit {

  @Output() dateRangeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  setDateRange(date : any) {
    this.dateRangeEvent.emit(date);
  }

}
