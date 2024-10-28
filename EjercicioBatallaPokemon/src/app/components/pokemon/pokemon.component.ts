import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-response.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
 
  @Input() pokemon: Pokemon | undefined;
  turnos: number[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  
  }

  
  getImagenPokemon(id: String){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.split('/')[6]}.png`
  }

  incrementarTurno(): void {
    this.turnos.push(1);
  }

}
