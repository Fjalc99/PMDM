import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_KEY = '<<api_key>>'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  createRequestToken(): Observable<> {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`);
  }

}
