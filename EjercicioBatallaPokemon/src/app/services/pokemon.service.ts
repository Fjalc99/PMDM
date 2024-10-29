import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetailResponse} from '../models/pokemon-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}/${id}`);
  }
}

