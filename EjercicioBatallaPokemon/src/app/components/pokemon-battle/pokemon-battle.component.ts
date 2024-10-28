import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon-response.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css',
})
export class PokemonBattleComponent implements OnInit {
 
constructor(private pokemonService: PokemonService) { }
  

  pokemon1: Pokemon | undefined;
  pokemon2: Pokemon | undefined;
  turnos: string[] = [];


  ngOnInit(): void {
    this.getPokemon1('1');
    this.getPokemon2('2');
  }

  getPokemon1(id: string){
    this.pokemonService.getPokemon(id).subscribe((response) => {
      this.pokemon1 = response;
    });
  }

  getPokemon2(id: string){
    this.pokemonService.getPokemon(id).subscribe((response) => {
      this.pokemon2 = response;
    });
  }


  atacar(atacante: any, atacado: any) {
    this.incrementarTurno(atacante.name, atacado.name);
  }

  incrementarTurno(atacante: string, atacado: string): void {
    this.turnos.push(`${atacante} ha atacado a ${atacado}`);
  }

 

}

