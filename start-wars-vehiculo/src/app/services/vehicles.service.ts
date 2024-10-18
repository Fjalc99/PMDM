import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { list, Vehicles } from '../interfaces/vehicles';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private htpp: HttpClient) { }

  getVehiclesList(): Observable<list>{
  return this.htpp.get<list>("https://swapi.dev/api/vehicles");
  }
}
