import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { };

  public searchCapital( capitalRequest: string ) : Observable<Country[]> {
    const path: string = `${this.apiUrl}/capital/${capitalRequest}`;
    return this.httpClient.get<Country[]>( path )
    .pipe(
      catchError(error =>
         //of es una clase de rxjs que nos permite construir un observable rápidamente a partir de un objeto dado
        of([]) //estamos devolviendo un array vacío
      )
    );
  };

  public searchCountry(countryRequest: string) : Observable<Country[]> {
    const path: string = `${this.apiUrl}/name/${countryRequest}`;
    return this.httpClient.get<Country[]>(path).pipe(
      catchError(error =>
        of([])
      )
    );
  };

  public searchRegion(regionRequest: string) : Observable<Country[]> {
    const pathVariable: string = `${this.apiUrl}/region/${regionRequest}`;
    return this.httpClient.get<Country[]>(pathVariable).pipe(
      catchError(error =>
        of([])
      )
    );
  };



};
