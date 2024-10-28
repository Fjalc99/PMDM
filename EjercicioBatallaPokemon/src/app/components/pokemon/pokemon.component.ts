import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon-response.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
 
  

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  
  }

  
  @Input() pokemon: any;
  @Output() ataque = new EventEmitter<void>();

  atacar() {
    this.ataque.emit();
  }
  getImagenPokemon(value: String){
    return `https://img.pokemondb.net/sprites/black-white/normal/{${value}}.png`}

}
