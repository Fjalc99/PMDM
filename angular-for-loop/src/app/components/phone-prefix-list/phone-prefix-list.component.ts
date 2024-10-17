import { Component } from '@angular/core';

export interface CountryPhone{
  nombre: string;
  bandera: string;
  prefix: number[];
}

const COUNTRY_PREFIXES: CountryPhone[] = [
  {nombre: 'España', bandera: 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png', prefix: [34]}
]

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {
  listaPaises  =  COUNTRY_PREFIXES

  getflag(bandera: string){
    return 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png'
  }


}
