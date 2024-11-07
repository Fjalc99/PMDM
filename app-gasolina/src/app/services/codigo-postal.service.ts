import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeList, CodigoPostal} from '../models/codigoPostal-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {

  constructor(private http: HttpClient) { }

  getCodigoPostalList(): Observable<CodeList[]>{
    return this.http.get<CodeList[]>("http://localhost:3000/code-list");
  }
}
