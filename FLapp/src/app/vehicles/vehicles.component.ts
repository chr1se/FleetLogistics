import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styles: [
  ]
})
export class VehiclesComponent implements OnInit {

  constructor(public service: VehicleService) { }

  ngOnInit(): void {
    this.service.reset();
    this.service.getAllVehicles();
    this.service.updateTotal();

  }

  onDelete(id : number){
    if (confirm('Are you sure to delete this vehicle ?')) {
      this.service.deleteVehicle(id)
        .subscribe(res => {
          this.service.getAllVehicles();
        },
        err => { console.log(err); })
    }
  }

  filterChange(e: HTMLInputElement){
    this.service.search = e.value;
    //if(e.localName == 'select')this.service.client = e.value;
    this.service.getAllVehicles();
    this.service.updateTotal();
  }

  pagerClick(index: number){
    this.service.page = index;
    this.service.getAllVehicles();
  }
}
