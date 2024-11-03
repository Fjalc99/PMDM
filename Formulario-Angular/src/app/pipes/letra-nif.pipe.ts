import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraNif'
})
export class LetraNifPipe implements PipeTransform {

  transform(nif: string): string {

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const nifNumero = parseInt(nif, 10);

    if (!isNaN(nifNumero) && nif.length === 8) {
      return letras[nifNumero % 23];
    }
    
    return '';
  }
}
