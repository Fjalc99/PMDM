import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../pipes/custom-eur.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  titulo = 'Bienvenido a Angular Pipes';
  precio = 125.75;
  createdAT = new Date(2020, 10, 10);
  porcentajeVida = 0.5;
  customEurValue: string | number =  '15';

  constructor(private customEur: CustomEurPipe) { }

  ngOnInit(): void {
      this.customEurValue = this.customEur.transform(this.customEurValue);
  }
}
