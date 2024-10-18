import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../interfaces/house.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceTsService {

  constructor(private http: HttpClient) {}


  getHouseList(): Observable<House[]>{
    return this.http.get<House[]>("http://localhost:3000/houses-list");
  }
}
