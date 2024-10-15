import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent  {
  resultado = '0';
  operacion = '';

  Input(value: string) {
    if (this.resultado === '0') {
      this.resultado = value;
    } else {
      this.resultado += value;
    }
  }

  suma() {
    this.resultado = eval(this.resultado).toString();
  }


  clear(){
    this.operacion = '';
    this.resultado = '0';
  }

}
