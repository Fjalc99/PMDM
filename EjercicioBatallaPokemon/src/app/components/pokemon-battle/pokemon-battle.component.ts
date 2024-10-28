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
  ataqueEnCurso: boolean = false;
  turnoActual: string | undefined;


  ngOnInit(): void {
    this.getPokemon1('1');
    this.getPokemon2('4');
  }

  getPokemon1(id: string) {
    this.pokemonService.getPokemon(id).subscribe((response) => {
      this.pokemon1 = response;
      this.turnoActual = this.pokemon1.name;
    });
  }

  getPokemon2(id: string) {
    this.pokemonService.getPokemon(id).subscribe((response) => {
      this.pokemon2 = response;
    });
  }

  incrementarTurno(atacante: string, atacado: string): void {
    this.turnos.push(`${atacante} ha atacado a ${atacado}`);
    this.ataqueEnCurso = false;
    this.turnoActual = atacado;
  }

  atacar(atacante: any, atacado: any) {
    if (!this.ataqueEnCurso) {
      this.ataqueEnCurso = true;
      this.incrementarTurno(atacante.name, atacado.name);
    }
  }
}




