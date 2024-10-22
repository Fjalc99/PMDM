import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPeopleResponse } from '../models/people-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<ListPeopleResponse> {
    return this.http.get<ListPeopleResponse>('https://swapi.dev/api/people');
  }
}
