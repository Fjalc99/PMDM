import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {
  // TURN possible values: 1, 2
  pokemonTurn = 1;
  pokemonPlayer1Id = 26;
  pokemonPlayer2Id = 10;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  ganador: string | null = null;

  
  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      // Apply damage to Pokemon 2
      this.lifePokemon2 = Math.max(0, this.lifePokemon2 - damage,0);
      if (this.lifePokemon2 <= 0) {
        setTimeout(() => {
          this.ganador = 'Pokemon 1';
        }, 1000);
      } else {
        this.pokemonTurn = 2;
      }
    } else {
      // Apply damage to Pokemon 1
      this.lifePokemon1 = Math.max(0, this.lifePokemon1 - damage,0);
      if (this.lifePokemon1 <= 0) {
        setTimeout(() => {
          this.ganador = 'Pokemon 2';
        }, 1000);
      } else {
        this.pokemonTurn = 1;
      }
    }
  }
}
