import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'suppliers',component:SuppliersComponent},
  {path:'messages',component:MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
