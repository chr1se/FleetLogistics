import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  readonly baseURL = 'http://localhost:55047/api/Vehicle';
  vehicles : Vehicle[] = [];
  search = '';
  //client = '';
  page = 0;
  total :Number = 70;


  constructor(private http : HttpClient) { }

  reset(){
    this.search = '';
    //this.client = '';
  }
  postVehicle() {
    //return this.http.post(this.baseURL, this.formData);
  }
  putVehicle() {
    //return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deleteVehicle(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getAllVehicles() {
    this.http.get(this.baseURL+'/'+this.page+'/'+this.search)
      .toPromise()
      .then(res =>{
        this.vehicles = res as Vehicle[];
        console.log(res)
      });
  }

  updateTotal(){
    this.http.get(this.baseURL+'/count/'+this.search)
      .toPromise()
      .then(res =>{
        this.total = res as Number;
      });    
  }
}
