import { Component, OnInit } from '@angular/core';
import { Character, CharactersListResponse } from '../../interfaces/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit {
 
  listCharacter: Character[] = []


  constructor(private characterService: CharacterService){

  }

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe(respuesta =>{
      this.listCharacter = respuesta.results;
    })
  }


}
