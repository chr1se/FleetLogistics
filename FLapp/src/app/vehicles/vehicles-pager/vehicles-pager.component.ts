import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-vehicles-pager',
  templateUrl: './vehicles-pager.component.html',
  styles: [
  ]
})
export class VehiclesPagerComponent implements OnInit {
  
  @Output() onPagerClick = new EventEmitter();
  
  constructor(public service: VehicleService) { }

  ngOnInit(): void {
  }

  count(){
    return Array(Math.floor(<any>this.service.total/10));
  }

}
