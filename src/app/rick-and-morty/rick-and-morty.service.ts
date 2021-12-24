import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestResponse } from '../models/rick-and-morty-models';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  obtainCharacters(): Observable<RequestResponse> {
    const url = 'https://rickandmortyapi.com/api/character';

    return this.http.get<RequestResponse>(url);
  }
}
