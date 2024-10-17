import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrl: './barra-progreso.component.css'
})
export class BarraProgresoComponent {

  

  @Input() value = 0;
  @Input() color = 'success';

 
  detectarColor(){
    if(this.value >= 50){
      return this.color = 'success'
    }
    return this.color = 'danger'
  }


}
