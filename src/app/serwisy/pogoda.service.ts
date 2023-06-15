import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const apiKlucz = environment.apiKlucz;
const apiAdres = environment.apiAdres;

@Injectable({
  providedIn: 'root'
})
export class PogodaService {

  constructor(private http: HttpClient) { }

  public pobierzDane(country: string): Observable<any> {
    return this.http.get(`${apiAdres}?key=${apiKlucz}&q=${country}`);
  }
}