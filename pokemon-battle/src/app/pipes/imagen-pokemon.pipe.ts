import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPokemon'
})
export class ImagenPokemonPipe implements PipeTransform {

  transform(value: string | number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${value}.png`;
  }

}
