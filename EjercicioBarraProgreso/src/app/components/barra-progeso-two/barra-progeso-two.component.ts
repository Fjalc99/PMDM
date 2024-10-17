import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progeso-two',
  templateUrl: './barra-progeso-two.component.html',
  styleUrl: './barra-progeso-two.component.css'
})
export class BarraProgesoTwoComponent {
  @Input() progeso = 80;
  @Input() color = '';

  getProgescolor(): string{
    if(this.progeso <25){
      return this.color = 'danger'
    }else{
      if (this.progeso <25) {
        return this.color = 'warning'
      }else{
        if (this.progeso >50) {
          return this.color = 'primary'
        }
      }
    }

    return this.color = 'success'
   
  }


}
