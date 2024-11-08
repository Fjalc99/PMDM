import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComunidadesAutonomas } from '../models/comunidadesAutonomas-response';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesAutonomasService {

  constructor(private http: HttpClient) { }

  getComunidadesAutonomas(): Observable<ComunidadesAutonomas[]>{
    return this.http.get<ComunidadesAutonomas[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/');
  }

}