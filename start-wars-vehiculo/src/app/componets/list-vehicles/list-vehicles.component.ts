import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../interfaces/vehicles';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrl: './list-vehicles.component.css'
})
export class ListVehiclesComponent implements OnInit {
  listVehicles: Vehicles[] = []
  

  

  constructor(private vehiclesService: VehiclesService){

  }

  ngOnInit(): void {
    
    this.vehiclesService.getVehiclesList().subscribe(respuesta => {
      this.listVehicles = respuesta.results; 
    });
  }
}