import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles } from '../interfaces/vehicles';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private htpp: HttpClient) { }

  getVehiclesList(): Observable<Vehicles[]>{
  return this.htpp.get<Vehicles[]>("https://swapi.dev/api/vehicles");
  }
}
