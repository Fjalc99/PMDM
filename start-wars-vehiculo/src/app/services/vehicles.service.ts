import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles, VehiclesListResponse } from '../interfaces/vehicles';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private htpp: HttpClient) { }

  getVehiclesList(): Observable<VehiclesListResponse>{
  return this.htpp.get<VehiclesListResponse>("https://swapi.dev/api/vehicles");
  }
}
