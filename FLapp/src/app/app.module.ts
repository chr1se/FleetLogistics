import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { MessagesComponent } from './messages/messages.component';
import { VehiclesFilterComponent } from './vehicles/vehicles-filter/vehicles-filter.component';
import { VehiclesPagerComponent } from './vehicles/vehicles-pager/vehicles-pager.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    SuppliersComponent,
    MessagesComponent,
    VehiclesFilterComponent,
    VehiclesPagerComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
