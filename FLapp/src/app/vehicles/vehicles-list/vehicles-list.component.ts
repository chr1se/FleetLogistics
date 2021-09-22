import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehicle } from 'src/app/shared/vehicle.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styles: [
  ]
})
export class VehiclesListComponent implements OnInit {
  @Input() vehicles :Vehicle[] = []; 
  @Output() onVehicleDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
