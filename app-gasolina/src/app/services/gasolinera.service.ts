import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GasolineraService {
  constructor(private http: HttpClient) {}

  getGasList() {
    return this.http.get(
      'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/'
    );
  }

  getcomunidadAutonoma(IDCCAA: string) {
    return this.http.get(
      `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroCCAA/${IDCCAA}`
    );
  }

  getPorUnaProvincia(idPovincia: string) {
    return this.http.get(
      `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/${idPovincia}`
    );
  }
}
