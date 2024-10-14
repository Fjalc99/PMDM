import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  nombreCoche = '';
  marchas = '';
  precio = '';
  img = 'ur';

  ngOnInit(): void {
      this.nombreCoche = 'Toyota GR'
      this.marchas = 'Automatico/Manual'
      this.precio = '$85/day'
      this.img = 'assests/coche_1.png'
  }
}
