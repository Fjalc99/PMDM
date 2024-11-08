import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provinciasResponse } from '../models/provincia-response.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http: HttpClient) { }

  getProvinciasPorComunidades(IDCCAA: string): Observable<provinciasResponse[]>{
   return this.http.get<provinciasResponse[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${IDCCAA}`);
  }
  }

