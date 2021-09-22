import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styles: [
  ]
})
export class VehiclesFilterComponent implements OnInit {
  @Output() onFilterChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
