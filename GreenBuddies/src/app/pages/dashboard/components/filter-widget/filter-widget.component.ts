import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.css']
})

export class FilterWidgetComponent implements OnInit {

  @Output() dateRangeEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  setDateRange(value : string) {
      this.dateRangeEvent.emit(value);
  }

}
