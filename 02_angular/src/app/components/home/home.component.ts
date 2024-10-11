import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  nombre = '';
  apellido = '';
  edad = 0
  lifetime = 'young';

 ngOnInit(): void {
   this.nombre = 'Francisco';
   this.apellido = 'Alcantarilla';
    this.edad = 25;
    if (this.edad >= 18){
      this.lifetime ='adult';
    }
  }

  calcBirhyear(){
    return 2024 - this.edad
  }

  showInfoDialog(){
    return alert("No tengo mas info")
  }

}
