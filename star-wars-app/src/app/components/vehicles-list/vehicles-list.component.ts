import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicles-list.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css',
})
export class VehiclesListComponent implements OnInit {

  vehicleList: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((resp) => {
      this.vehicleList = resp.results;
    });
  }

  getImageUrlVehiculo(vehicleUrl: string) {
    return `https://starwars-visualguide.com/assets/img/vehicles/${vehicleUrl.split("/")[5]}.jpg`;
    }
}
