import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersListResponse } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
 

  constructor(private http: HttpClient) { }
  
  getCharacterList(): Observable<CharactersListResponse> {
    return this.http.get<CharactersListResponse>("https://rickandmortyapi.com/api/character");
  }


}
